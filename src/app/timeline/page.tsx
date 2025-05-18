"use client";
import TimelineBlock from "./components/TimelineBlock";
import { timelineData } from "./components/timelineData";
import Navigation from "../components/Navigation";
import TimelineTitle from "./components/TimelineTitle";
import useHorizontalScroll from "./hooks/useHorizontalScroll";

export default function Timeline() {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
     
      {/* 타이틀 영역 */}
      <TimelineTitle />
      
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