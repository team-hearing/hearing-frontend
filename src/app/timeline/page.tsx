"use client";
import { useRef } from "react";

const data = [
  {
    year: 2025,
    events: [
      { date: "25.00.00", title: "사건 테스트" },
      { date: "", title: "사건2" },
      { date: "", title: "사건3" }
    ]
  },
  {
    year: 2024,
    events: [
      { date: "", title: "사건1" },
      { date: "", title: "사건2" },
      { date: "", title: "사건3" }
    ]
  }
];

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
          {data.map((block) => (
            <div key={block.year} className="flex flex-col">
              
              {/* 상단 영역 */}
              <div className="relative mb-24">
                {/* 이미지 */}
                <div className="pl-28">
                  <div className="w-32 h-40 bg-gray-light flex items-center justify-center text-sm text-gray-500 mb-2">
                    이미지
                  </div>
                </div>

                {/* 제목/날짜 */}
                {block.events[0] && (
                  <div className="pl-28 text-start mb-4">
                    <p className="text-sm font-regular">{block.events[0].date}</p>
                    <p className="text-sm font-bold">{block.events[0].title}</p>
                  </div>
                )}

                {/* 연도 마커 */}
                <div className="absolute left-8 top-[244px] z-10">
                  <p className="text-center text-body font-bold">{block.year}</p>
                  <div className="w-6 h-6 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                  </div>
                </div>
              </div>

              {/* 하단 영역 - 세계사 리스트 */}
              <div className="flex items-start gap-2 pl-28">
                <div className="bg-secondary w-8 h-4 flex items-center justify-center"></div>
                <div className="ml-2">
                  <p className="font-bold mb-2">세계사</p>
                  <ul className="list-disc pl-4">
                      <li>사건1</li>
                      <li>사건2</li>
                      <li>사건3</li>
                  </ul>
                </div>
              </div>
            </div>
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