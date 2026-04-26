"use client";

// 타임라인 데이터 타입 정의
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { worldHistoryData } from './worldHistoryData';
import { getEventImagePath } from './eventImageMap';

export type Event = {
  id: number;
  date: string;
  title: string;
  tags?: string[];
};

export type TimelineData = {
  year: number;
  events: Event[];
};

// 타임라인 블록 컴포넌트
const TimelineBlock = ({ data }: { data: TimelineData }) => {
  // 해당 연도의 세계사 데이터 찾기
  const worldHistory = worldHistoryData.find((item) => item.year === data.year);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const markFailed = (eventId: number) => {
    setFailedImages((prev) => {
      if (prev.has(eventId)) return prev;
      const next = new Set(prev);
      next.add(eventId);
      return next;
    });
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* 상단 영역 */}
      <div className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24 w-full">
        {/* 연도별 이벤트 목록 */}
        <div className="pl-16 sm:pl-20 md:pl-24 lg:pl-28">
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto">
            {data.events.map((event) => {
              const failed = failedImages.has(event.id);
              return (
                <div
                  key={event.id}
                  className="min-w-[100px] sm:min-w-[110px] md:min-w-[120px] lg:min-w-[130px] max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]"
                >
                  {/* 이미지 */}
                  <Link href={`/timeline/${event.id}`}>
                    <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-30 md:h-38 lg:w-32 lg:h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden rounded-sm">
                      {failed ? (
                        <div className="absolute inset-0 bg-gray-light flex items-center justify-center text-sm text-gray-500">
                          <span>이미지</span>
                        </div>
                      ) : (
                        <Image
                          src={getEventImagePath(event.id)}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 128px) 100vw, 128px"
                          onError={() => markFailed(event.id)}
                        />
                      )}
                    </div>
                  </Link>

                  {/* 제목/날짜 */}
                  <Link href={`/timeline/${event.id}`}>
                    <div className="text-start mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                      <p className="text-sm font-regular">{event.date}</p>
                      <p className="text-sm font-bold truncate">{event.title}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 연도 마커 */}
        <div className="absolute left-4 sm:left-5 md:left-6 lg:left-8 top-[180px] sm:top-[200px] md:top-[220px] lg:top-[244px] z-10">
          <p className="text-center text-sm sm:text-base md:text-body font-bold">{data.year}</p>
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-primary bg-white flex items-center justify-center"></div>
        </div>
      </div>

      {/* 하단 영역 - 세계사 리스트 */}
      <div className="flex items-start gap-1 sm:gap-2 pl-16 sm:pl-20 md:pl-24 lg:pl-28 pb-12">
        <div className="bg-secondary w-6 h-3 sm:w-7 sm:h-3.5 md:w-8 md:h-4 flex items-center justify-center"></div>
        <div className="ml-1 sm:ml-2">
          <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">세계사</p>
          <ul className="list-disc pl-3 sm:pl-4">
            {worldHistory?.events.map((event) => (
              <li key={event.id} className="text-sm mb-1">
                {event.title}
                {event.region && <span className="text-gray-500 ml-1">({event.region})</span>}
              </li>
            )) || <li className="text-sm text-gray-500">해당 연도 세계사 데이터 없음</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineBlock;
