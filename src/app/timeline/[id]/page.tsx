// app/timeline/[id]/page.tsx
"use client";
import { notFound } from "next/navigation";
import { useRef, use } from "react";
import { timelineData } from "../(components)/timelineData";
import { getEventImagePath } from "../(components)/eventImageMap";

// 컴포넌트 임포트
import CloseButton from "../(components)/detail/CloseButton";
import IntroPage from "../(components)/detail/IntroPage";
import GalleryPage from "../(components)/detail/GalleryPage";
import QuotePage from "../(components)/detail/QuotePage";
import useHorizontalWheel from "../hooks/useHorizontalWheel";

export default function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const eventId = Number(resolvedParams.id);

  // timelineData에서 사건 찾기 (BE 연동 전 임시)
  let foundEvent: { id: number; date: string; title: string; tags?: string[] } | null = null;
  let foundYear: number | null = null;
  for (const block of timelineData) {
    const e = block.events.find((ev) => ev.id === eventId);
    if (e) {
      foundEvent = e;
      foundYear = block.year;
      break;
    }
  }
  if (!foundEvent || foundYear === null) {
    notFound();
  }

  // 백엔드 연동 전: 썸네일 1장을 슬롯 수만큼 채워 레이아웃 유지
  const thumbnail = getEventImagePath(eventId);
  const post = {
    id: eventId,
    title: foundEvent.title,
    content: `${foundYear}년 ${foundEvent.date}에 일어난 사건입니다. 상세 설명은 백엔드 연동 후 제공됩니다.`,
    content2: "",
    images: Array(8).fill(thumbnail),
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 수평 휠 스크롤 커스텀 훅 사용
  useHorizontalWheel(scrollContainerRef);

  return (
    <div className="h-screen bg-white relative">
      {/* 닫기 버튼 */}
      <CloseButton />

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
          <GalleryPage content={post.content} images={post.images} />
        </div>

        {/* 3 페이지 */}
        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">
          <QuotePage eventId={post.id} />
        </div>
      </div>
    </div>
  );
}
