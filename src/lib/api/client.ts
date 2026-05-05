/**
 * Hearing 백엔드(SpringBoot) API 클라이언트.
 *
 * 환경변수: NEXT_PUBLIC_BASE_URL (.env.local / .env.production 참고)
 * 클라이언트와 서버 모두에서 동일하게 사용.
 */

import type { ImageMeta, TimelineEvent } from "@/types/timeline";

// 서버 전용 API_BASE_URL이 정의돼 있으면 우선(서버 사이드 한정),
// 그렇지 않으면 NEXT_PUBLIC_BASE_URL 사용.
const SERVER_BASE = process.env.API_BASE_URL;
const PUBLIC_BASE = process.env.NEXT_PUBLIC_BASE_URL;

function resolveBase(): string {
  if (typeof window === "undefined") {
    return SERVER_BASE ?? PUBLIC_BASE ?? "";
  }
  return PUBLIC_BASE ?? "";
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
  // 204 No Content 등 응답 바디 없는 경우 처리
  const text = await res.text();
  return (text ? JSON.parse(text) : null) as T;
}

/** 관리자 쓰기 요청 — Authorization: Bearer 토큰 헤더 추가 */
function adminRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN ?? "";
  return request<T>(path, {
    ...init,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers ?? {}),
    },
  });
}

export type EventsByYear = Record<string, TimelineEvent[]>;

// ── 요청 바디 타입 ────────────────────────────────────────────────────────────

export interface EventCreateBody {
  eventName: string;
  eventKind?: "KOREAN" | "WORLD";
  region?: string;
  description?: string;
  keyFigures?: string;
  eventDate?: string;
  startDate?: string;
  endDate?: string;
}

export interface EventUpdateBody {
  eventName?: string;
  region?: string;
  description?: string;
  keyFigures?: string;
  eventDate?: string;
  startDate?: string;
  endDate?: string;
}

export interface ImageAddBody {
  url: string;
  alt?: string;
  source?: string;
  sourceUrl?: string;
  author?: string;
  license?: string;
  licenseUrl?: string;
  primary?: boolean;
}

// ── API 객체 ──────────────────────────────────────────────────────────────────

export const api = {
  // 조회 (GET)
  /** GET /hist-events/grouped-by-year — 한국사 연도별 그룹 */
  getEventsByYear: () => request<EventsByYear>("/hist-events/grouped-by-year"),
  /** GET /world-events/grouped-by-year — 세계사 연도별 그룹 */
  getWorldEventsByYear: () => request<EventsByYear>("/world-events/grouped-by-year"),
  /** GET /hist-events/:id — 사건 상세 */
  getEvent: (id: number) => request<TimelineEvent>(`/hist-events/${id}`),

  // 사건 CRUD (F301)
  /** POST /hist-events — 사건 등록 */
  createEvent: (body: EventCreateBody) =>
    adminRequest<TimelineEvent>("/hist-events", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  /** PATCH /hist-events/:id — 사건 수정 (null 필드 스킵) */
  updateEvent: (id: number, body: EventUpdateBody) =>
    adminRequest<TimelineEvent>(`/hist-events/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  // 이미지 관리 (F302)
  /** POST /hist-events/:id/images — 이미지 URL 추가 */
  addImage: (eventId: number, body: ImageAddBody) =>
    adminRequest<TimelineEvent>(`/hist-events/${eventId}/images`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  /** DELETE /hist-events/:eventId/images/:imageId — 이미지 삭제 */
  deleteImage: (eventId: number, imageId: number) =>
    adminRequest<null>(`/hist-events/${eventId}/images/${imageId}`, {
      method: "DELETE",
    }),
  /** PUT /hist-events/:id/images/reorder — 갤러리 순서 변경 */
  reorderImages: (eventId: number, imageIds: number[]) =>
    adminRequest<TimelineEvent>(`/hist-events/${eventId}/images/reorder`, {
      method: "PUT",
      body: JSON.stringify({ imageIds }),
    }),
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

// ---------------------------------------------------------------------------
// 세계사 어댑터 — TimelineBlock 하단의 세계사 영역에서 사용하는 형태
// ---------------------------------------------------------------------------

export type AdaptedWorldEvent = {
  id: number;
  title: string;
  region?: string;
};

export type AdaptedWorldYear = {
  year: number;
  events: AdaptedWorldEvent[];
};

export function mapWorldEventsByYear(data: EventsByYear): AdaptedWorldYear[] {
  return Object.entries(data)
    .map(([year, events]) => ({
      year: Number(year),
      events: events.map((e) => ({
        id: e.eventId,
        title: e.eventName,
        region: e.region ?? undefined,
      })),
    }))
    .filter((y) => Number.isFinite(y.year))
    .sort((a, b) => b.year - a.year);
}
