"use client";
import { useRef, useEffect } from "react";
import TimelineBlock from "./components/TimelineBlock";
import { timelineData } from "./components/timelineData";

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.clientWidth;

      if (e.deltaY > 0) {
        // 다음 페이지 스크롤 
        container.scrollTo({
          left: scrollLeft + pageWidth,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0) {
        // 이전 페이지 스크롤 
        container.scrollTo({
          left: scrollLeft - pageWidth,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* 타이틀 영역 */}
      <div className="p-10 px-12">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h2 className="text-lg font-medium">역사를 듣다.</h2>
        <h1 className="text-3xl font-bold tracking-widest">H E A R I N G</h1>
      </div>
      
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
                <div key={block.year} className="snap-start scroll-mx-12">
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