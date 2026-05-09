// app/timeline/[id]/page.tsx
"use client";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState, use } from "react";
import { timelineData as staticTimelineData } from "../(components)/timelineData";
import { getEventImagePath } from "../(components)/eventImageMap";
import { api, ApiError, formatDateShort } from "@/lib/api/client";
import type { TimelineEvent } from "@/types/timeline";

// 컴포넌트 임포트
import CloseButton from "../(components)/detail/CloseButton";
import IntroPage from "../(components)/detail/IntroPage";
import GalleryPage from "../(components)/detail/GalleryPage";
import QuotePage from "../(components)/detail/QuotePage";
import useHorizontalWheel from "../hooks/useHorizontalWheel";
import ImageCredit from "../../(components)/ImageCredit";

interface PostData {
  id: number;
  title: string;
  content: string;
  content2: string;
  images: string[];
  beEvent: TimelineEvent | null;
}

/**
 * BE에서 사건 단건을 받지 못한 경우 정적 timelineData에서 동일 ID로 폴백.
 */
function buildFallback(eventId: number): PostData | null {
  for (const block of staticTimelineData) {
    const e = block.events.find((ev) => ev.id === eventId);
    if (e) {
      const thumb = getEventImagePath(eventId);
      return {
        id: eventId,
        title: e.title,
        content: `${block.year}년 ${e.date}에 일어난 사건입니다.`,
        content2: "",
        images: [thumb, ...Array(7).fill("/img/default-placeholder.jpg")],
        beEvent: null,
      };
    }
  }
  return null;
}

/**
 * BE 응답을 IntroPage/GalleryPage가 기대하는 PostData 형태로 변환.
 */
function splitDescription(desc: string): [string, string] {
  // content  = 앞 1~2문장 (1페이지 요약)
  // content2 = 전체 본문  (2페이지 상세)
  const sentences = desc.split(/(?<=[.!?!？。])\s+/);
  const summaryEnd = Math.min(2, sentences.length);
  const summary = sentences.slice(0, summaryEnd).join(" ");
  return [summary, desc];
}

function buildFromBE(event: TimelineEvent): PostData {
  const dateLabel = formatDateShort(event.eventDate, event.startDate, event.endDate);
  const fullDesc = event.description?.trim()
    ? event.description
    : `${dateLabel}에 일어난 사건입니다.`;

  const [content, content2] = splitDescription(fullDesc);

  const baseUrls: string[] = [];
  if (event.images && event.images.length > 0) {
    for (const img of event.images) baseUrls.push(img.url);
  } else if (event.thumbnail?.url) {
    baseUrls.push(event.thumbnail.url);
  }
  const slots: string[] = [];
  for (let i = 0; i < 8; i++) {
    slots.push(baseUrls[i] ?? "/img/default-placeholder.jpg");
  }

  return {
    id: event.eventId,
    title: event.eventName,
    content,
    content2,
    images: slots,
    beEvent: event,
  };
}

export default function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const eventId = Number(resolvedParams.id);

  const [post, setPost] = useState<PostData | null>(null);
  const [notFoundFlag, setNotFoundFlag] = useState(false);

  useEffect(() => {
    let cancelled = false;
    api
      .getEvent(eventId)
      .then((event) => {
        if (cancelled) return;
        setPost(buildFromBE(event));
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        if (err instanceof ApiError && err.status === 404) {
          if (!buildFallback(eventId)) {
            setNotFoundFlag(true);
          } else {
            setPost(buildFallback(eventId));
          }
        } else {
          // 콜드 스타트 등 네트워크 오류 → 정적 폴백
          console.warn("[timeline/[id]] BE fetch failed, using fallback:", err);
          setPost(buildFallback(eventId));
        }
      });
    return () => {
      cancelled = true;
    };
  }, [eventId]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useHorizontalWheel(scrollContainerRef);

  if (notFoundFlag) {
    notFound();
  }
  if (!post) {
    return (
      <div className="h-screen bg-white flex flex-col items-center justify-center gap-4 text-gray-400">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
        <p className="text-sm">사건 정보를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white relative">
      {/* 닫기 버튼 */}
      <CloseButton />

      {/* 이미지 출처 표시 (F208) — BE thumbnail이 있을 때만 표시 */}
      {post.beEvent?.thumbnail && (
        <div className="absolute top-2 left-16 z-20 max-w-[60vw] pointer-events-auto bg-white/80 px-2 rounded">
          <ImageCredit meta={post.beEvent.thumbnail} />
        </div>
      )}

      {/* 수평 스크롤 컨테이너 */}
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
      >
        {/* 1 페이지 */}
        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">
          <IntroPage
            title={post.title}
            content={post.content}
            content2={post.content2}
            images={post.images}
          />
        </div>

        {/* 2 페이지 */}
        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">
          <GalleryPage content={post.content2 || post.content} images={post.images} />
        </div>

        {/* 3 페이지 */}
        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">
          <QuotePage eventId={post.id} />
        </div>
      </div>
    </div>
  );
}
