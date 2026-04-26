"use client";

import { timelineData } from "./timelineData";
import { worldHistoryData } from "./worldHistoryData";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Earth } from "lucide-react";
import { getEventImagePath } from "./eventImageMap";

interface MobileTimelineProps {
  onYearChange?: (year: number) => void;
}

const MobileTimeline = ({ onYearChange }: MobileTimelineProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<{[key: number]: HTMLDivElement | null}>({});
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [showWorldHistory, setShowWorldHistory] = useState<{[key: number]: boolean}>({});
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const markFailed = (eventId: number) => {
    setFailedImages((prev) => {
      if (prev.has(eventId)) return prev;
      const next = new Set(prev);
      next.add(eventId);
      return next;
    });
  };

  const formatDateWithBreak = (dateStr: string) => {
    return dateStr;
  };

  const getImagePath = getEventImagePath;

  const toggleWorldHistory = (year: number) => {
    setShowWorldHistory(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      let closestYear = null;
      let minDistance = Infinity;
      
      Object.entries(yearRefs.current).forEach(([year, element]) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerHeight / 3);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestYear = parseInt(year);
        }
      });
      
      if (closestYear !== null && closestYear !== activeYear) {
        setActiveYear(closestYear);
        if (onYearChange) onYearChange(closestYear);
      }
    };
    
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeYear, onYearChange]);
  
  const setYearRef = (el: HTMLDivElement | null, year: number) => {
    yearRefs.current[year] = el;
  };

  return (
    <div 
      ref={containerRef}
      className="p-8 h-full overflow-y-auto"
    >

      {/* 타임라인 컨테이너 */}
      <div className="relative">
        {/* 전체 세로선 */}

        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-dark"></div>


        {timelineData.map((yearData) => {
          const worldHistory = worldHistoryData.find(item => item.year === yearData.year);
          
          return (
            <div 
              key={yearData.year}
              ref={(el) => setYearRef(el, yearData.year)}
              className="pl-12 relative mb-8"
            >
              {/* 연도 마커*/}

              <div className="absolute left-2.5 top-0 w-4 h-4 bg-gray-dark rounded-full"></div>

              
              {/*연도 제목*/}
              <div className="text-lg font-semibold mb-4 text-primary">{yearData.year}년</div>
              
              {/* 컨텐츠 */}
              {yearData.events.map((event) => {
                const failed = failedImages.has(event.id);
                return (
                  <div key={event.id} className="mb-6">
                    <div className="text-sm font-regular mb-1">
                      <span className="text-primary font-regular">{yearData.year}.</span>
                      <span dangerouslySetInnerHTML={{ __html: formatDateWithBreak(event.date) }} />
                    </div>

                    <Link href={`/timeline/${event.id}`}>
                      <div className="bg-gray-light rounded-sm mt-2 hover:bg-gray-light transition-colors relative h-48 flex items-end overflow-hidden">
                        {failed ? (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-medium text-sm bg-gray-light">
                            이미지
                          </div>
                        ) : (
                          <Image
                            src={getImagePath(event.id)}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            onError={() => markFailed(event.id)}
                          />
                        )}
                        {/* 텍스트 오버레이 */}
                        <div className="w-full p-2 relative z-10 bg-black bg-opacity-50 text-white font-semibold text-base">
                          {event.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

              {/*세계사 토글*/}
              {worldHistory && worldHistory.events.length > 0 && (
                <>
                  <button
                    onClick={() => toggleWorldHistory(yearData.year)}
                    className="text-sm text-primary underline mb-2 hover:text-primary-dark transition-colors"
                  >
                    {showWorldHistory[yearData.year] ? "세계사 숨기기" : "+ 세계사 보기"}
                  </button>

                  {showWorldHistory[yearData.year] && (
                    <div className="p-4 mt-2 mb-6">
                      <div className="font-semibold mb-3 flex items-center">
                        <Earth className="text-lg mr-2" />
                        세계사 ({yearData.year})
                      </div>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        {worldHistory.events.map((worldEvent) => (
                          <li key={worldEvent.id}>
                            {worldEvent.title}{' '}
                            {worldEvent.region && <span className="text-gray-400">({worldEvent.region})</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTimeline; 