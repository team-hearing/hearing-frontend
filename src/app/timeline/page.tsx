"use client";
import { useState } from "react";
import TimelineBlock from "./components/TimelineBlock";
import { timelineData } from "./components/timelineData";
import Navigation from "../components/Navigation";
import TimelineTitle from "./components/TimelineTitle";
import useHorizontalScroll from "./hooks/useHorizontalScroll";

export default function Timeline() {
  const [currentYear, setCurrentYear] = useState<number | undefined>(
    timelineData.length > 0 ? timelineData[0].year : undefined
  );
  
  // 스크롤 이벤트 핸들러 - 현재 보이는 연도 감지
  const handleScroll = (container: HTMLDivElement) => {
    const blockElements = container.querySelectorAll(".snap-start");
    if (blockElements.length === 0) return;

    // 각 블록의 위치를 검사하여 현재 보이는 블록 찾기
    let currentIndex = 0;
    blockElements.forEach((block, index) => {
      const blockLeft = (block as HTMLElement).offsetLeft;
      // 화면 중앙에 가장 가까운 블록 찾기
      if (blockLeft - container.scrollLeft < container.clientWidth / 2) {
        currentIndex = index;
      }
    });

    // 현재 연도 업데이트
    if (currentIndex >= 0 && currentIndex < timelineData.length) {
      setCurrentYear(timelineData[currentIndex].year);
    }
  };

  // 커스텀 스크롤 훅 사용
  const scrollRef = useHorizontalScroll({
    onScroll: handleScroll
  });

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
     
      {/* 타이틀 영역 */}
      <TimelineTitle currentYear={currentYear} />
      
      {/* 타임라인 컨텐츠 영역 */}
      <div className="flex-grow flex flex-col relative">
        {/* 타임라인 선 */}
        <div className="absolute left-0 top-[408px] w-full h-1 bg-primary z-0" />
        
        {/* 컨텐츠 영역 - 위쪽 여백 */}
        <div className="flex-grow pt-32 px-12">
          <div
            ref={scrollRef}
            className="overflow-x-auto h-full snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100 scrollbar-thumb-rounded-b-lg"
          >
            <div className="flex gap-60 min-w-max relative z-10">
              {timelineData.map((block) => (
                <div key={block.year} className="snap-start scroll-mx-12" data-year={block.year}>
                  <TimelineBlock data={block} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 스크롤바 영역 */}
        <div className="h-12 px-12 mt-auto rounded-lg"></div>
      </div>
    </div>
  );
}