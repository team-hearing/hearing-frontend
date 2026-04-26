"use client";

import { useState, useEffect } from "react";
import TimelineBlock, { type TimelineData } from "./(components)/TimelineBlock";
import { timelineData as staticTimelineData } from "./(components)/timelineData";
import Navigation from "../(components)/Navigation";
import TimelineTitle from "./(components)/TimelineTitle";
import useHorizontalScroll from "./hooks/useHorizontalScroll";
import MobileTimeline from "./(components)/MobileTimeline";
import { api, mapEventsByYearToTimelineData } from "@/lib/api/client";

export default function Timeline() {
  // BE 응답을 받기 전(또는 실패 시)에는 정적 데이터로 폴백 — 화면이 비지 않도록.
  const [timelineData, setTimelineData] = useState<TimelineData[]>(staticTimelineData);
  const [usingFallback, setUsingFallback] = useState(true);
  const [currentYear, setCurrentYear] = useState<number | undefined>(
    staticTimelineData.length > 0 ? staticTimelineData[0].year : undefined,
  );

  // BE에서 사건 데이터 fetch (실패 시 정적 데이터 유지)
  useEffect(() => {
    let cancelled = false;
    api
      .getEventsByYear()
      .then((data) => {
        const adapted = mapEventsByYearToTimelineData(data);
        if (cancelled || adapted.length === 0) return;
        setTimelineData(adapted);
        setUsingFallback(false);
        setCurrentYear(adapted[0].year);
      })
      .catch((err) => {
        // BE 미가동 등의 경우 폴백 유지. 콘솔에만 표시.
        console.warn("[timeline] BE fetch failed, using static fallback:", err.message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // 스크롤 이벤트 핸들러 - 현재 보이는 연도 감지
  const handleScroll = (container: HTMLDivElement) => {
    const blockElements = container.querySelectorAll("[data-year]");
    if (blockElements.length === 0) return;

    let currentIndex = 0;
    blockElements.forEach((block, index) => {
      const blockLeft = (block as HTMLElement).offsetLeft;
      if (blockLeft - container.scrollLeft < container.clientWidth / 2) {
        currentIndex = index;
      }
    });

    if (currentIndex >= 0 && currentIndex < timelineData.length) {
      setCurrentYear(timelineData[currentIndex].year);
    }
  };

  // 모바일 타임라인에서 연도 변경 핸들러
  const handleMobileYearChange = (year: number) => {
    setCurrentYear(year);
  };

  // 커스텀 스크롤 훅 사용
  const scrollRef = useHorizontalScroll({
    onScroll: handleScroll,
  });

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>

      {/* 타이틀 영역 */}
      <TimelineTitle currentYear={currentYear} />

      {/* dev 가이드: 폴백 사용 중일 때 작은 배너 (운영 빌드에서는 비표시) */}
      {usingFallback && process.env.NODE_ENV === "development" && (
        <div className="text-xs text-gray-500 px-4 sm:px-6 md:px-8 lg:px-12 py-1">
          (BE 응답 받기 전 — 정적 데이터 표시 중)
        </div>
      )}

      {/* 모바일 타임라인 */}
      <div className="md:hidden timeline-scroll overflow-y-auto flex-grow">
        <MobileTimeline data={timelineData} onYearChange={handleMobileYearChange} />
      </div>

      {/* 데스크톱 타임라인 */}
      <div className="hidden md:block flex-grow flex flex-col relative min-h-0">
        {/* 타임라인 선 - 반응형 위치 */}
        <div className="absolute left-0 top-[180px] sm:top-[220px] md:top-[300px] lg:top-[340px] w-full h-1 bg-gray-medium-dark z-0" />

        {/* 컨텐츠 영역 - 반응형 여백 */}
        <div className="flex-grow pt-8 sm:pt-10 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <div ref={scrollRef} className="timeline-scroll overflow-x-auto h-full scroll-smooth">
            <div className="flex gap-32 sm:gap-40 md:gap-52 lg:gap-60 min-w-max relative z-10">
              {timelineData.map((block) => (
                <div key={block.year} data-year={block.year}>
                  <TimelineBlock data={block} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 스크롤바 영역 - 반응형 */}
        <div className="h-8 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8 lg:px-12 mt-auto"></div>
      </div>
    </div>
  );
}
