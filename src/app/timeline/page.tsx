"use client";
import { useRef } from "react";

const data = [
  {
    year: 2025,
    events: [
      { date: "", title: "사건1" },
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
    <div className="w-full px-4 py-10 bg-white relative">
      {/* 타이틀 */}
      <div className="mb-8">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h2 className="text-lg font-medium">역사를 듣다.</h2>
        <h1 className="text-3xl font-bold tracking-widest">H E A R I N G</h1>
      </div>

      {/* 타임라인 선) */}
      <div className="absolute left-0 top-[330px] w-full h-1 bg-primary z-0" />

      {/* 가로 스크롤 타임라인 영역 */}
      <div
        ref={scrollRef}
        className="overflow-x-auto"
        onWheel={(e) => {
          if (scrollRef.current) {
            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY;
          }
        }}
      >
        <div className="flex gap-20 min-w-max relative z-10">
          {data.map((block) => (
            <div key={block.year} className="flex flex-col items-center">
              {/* 회색 이미지 자리 */}
              <div className="w-32 h-40 bg-gray-light flex items-center justify-center text-sm text-gray-500 mb-2">
                이미지
              </div>

              {/* 날짜 / 제목 */}
              {block.events[0] && (
                <div className="text-center mb-4">
                  <p className="text-sm font-medium">{block.events[0].date}</p>
                  <p className="text-sm">{block.events[0].title}</p>
                </div>
              )}

              {/*  타임라인 마커 (선 위에 겹쳐져 있음) */}
              <div className="relative -mt-2 mb-2 flex flex-col items-center z-10">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 bg-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>

              {/* 연도 */}
              <p className="font-bold mb-2">{block.year}</p>

              {/* 세계사 사건 */}
              <div className="flex items-start">
                <div className="bg-secondary w-10 h-5 flex items-center justify-center"></div>
                <div className="ml-2">
                  <p className="font-bold mb-2">세계사</p>
                  <ul className="list-disc pl-4">
                    {block.events.map((event, idx) => (
                      <li key={idx}>
                        {event.date && <span>{event.date} </span>}
                        {event.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
