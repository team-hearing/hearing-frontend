/**
 * Hearing 백엔드(SpringBoot) API 클라이언트.
 *
 * - 서버 컴포넌트에서는 process.env.API_BASE_URL을 사용하고,
 *   클라이언트 컴포넌트에서는 NEXT_PUBLIC_BASE_IMAGE_URL을 fallback으로 사용한다.
 * - BE가 아직 미구축인 단계이므로 fetch는 실패할 수 있다. 호출부는 null/error 분기를 처리해야 한다.
 */

import type { ImageMeta, TimelineEvent } from "@/types/timeline";

const SERVER_BASE = process.env.API_BASE_URL;
const CLIENT_BASE = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

function resolveBase(): string {
  // 서버 사이드(SSR/RSC)에서는 server-only env가 우선
  if (typeof window === "undefined") {
    return SERVER_BASE ?? CLIENT_BASE ?? "";
  }
  return CLIENT_BASE ?? "";
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const base = resolveBase();
  if (!base) {
    throw new ApiError("API base URL is not configured", 0);
  }
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;

  const res = await fetch(url, {
    cache: "no-store",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    throw new ApiError(`Upstream ${res.status} ${res.statusText}`, res.status);
  }
  return (await res.json()) as T;
}

export type EventsByYear = Record<string, TimelineEvent[]>;

export const api = {
  /** GET /hist-events/grouped-by-year - admin/timeline 페이지가 사용 */
  getEventsByYear: () => request<EventsByYear>("/hist-events/grouped-by-year"),
  /** GET /hist-events/:id - 사건 상세 */
  getEvent: (id: number) => request<TimelineEvent>(`/hist-events/${id}`),
  /** GET /hist-events/:id/images - 사건 이미지 목록 */
  getEventImages: (id: number) => request<unknown[]>(`/hist-events/${id}/images`),
};

// ---------------------------------------------------------------------------
// 컴포넌트(TimelineBlock·MobileTimeline)가 쓰는 형태로 변환하는 어댑터
// ---------------------------------------------------------------------------

/**
 * BE eventDate("YYYY-MM-DD") 또는 (start, end) → 컴포넌트 표시용 짧은 문자열.
 * 예: "2025-04-04" → "04.04",  "2007-10-03"~"2007-10-05" → "10.03~05"
 */
export function formatDateShort(
  eventDate: string | null | undefined,
  startDate?: string | null | undefined,
  endDate?: string | null | undefined
): string {
  const d = eventDate ?? startDate ?? null;
  if (!d) return "";
  const md = d.slice(5, 10).replace("-", ".");
  if (startDate && endDate && startDate !== endDate) {
    const e = endDate.slice(8, 10);
    return `${md}~${e}`;
  }
  return md;
}

export type AdaptedEvent = {
  id: number;
  date: string;
  title: string;
  tags?: string[];
  thumbnail?: ImageMeta | null;
};

export type AdaptedYear = {
  year: number;
  events: AdaptedEvent[];
};

/**
 * BE 응답(연도별 그룹)을 TimelineBlock·MobileTimeline이 받는 형태로 변환.
 * 연도 내림차순으로 정렬.
 */
export function mapEventsByYearToTimelineData(data: EventsByYear): AdaptedYear[] {
  return Object.entries(data)
    .map(([year, events]) => ({
      year: Number(year),
      events: events.map((e) => ({
        id: e.eventId,
        date: formatDateShort(e.eventDate, e.startDate, e.endDate),
        title: e.eventName,
        thumbnail: e.thumbnail ?? null,
      })),
    }))
    .filter((y) => Number.isFinite(y.year))
    .sort((a, b) => b.year - a.year);
}
