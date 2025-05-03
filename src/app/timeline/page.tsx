"use client";
import { useRef } from "react";
import TimelineBlock from "./components/TimelineBlock";
import { timelineData } from "./components/timelineData";

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full p-10 px-12 bg-white relative">
      {/* 타이틀 */}
      <div className="mb-40">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h2 className="text-lg font-medium">역사를 듣다.</h2>
        <h1 className="text-3xl font-bold tracking-widest">H E A R I N G</h1>
      </div>

      {/* 타임라인 선 */}
      <div className="absolute left-0 top-[560px] w-full h-1 bg-primary z-0" />

      {/* 가로 스크롤 타임라인 영역 */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        onWheel={(e) => {
          if (scrollRef.current) {
            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY;
          }
        }}
      >
        <div className="flex gap-60 min-w-max relative z-10">
          {timelineData.map((block) => (
            <TimelineBlock key={block.year} data={block} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}