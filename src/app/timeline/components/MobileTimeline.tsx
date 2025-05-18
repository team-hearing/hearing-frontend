import { timelineData } from "./timelineData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface MobileTimelineProps {
  onYearChange?: (year: number) => void;
}

const MobileTimeline = ({ onYearChange }: MobileTimelineProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<{[key: number]: HTMLDivElement | null}>({});
  const [activeYear, setActiveYear] = useState<number | null>(null);
  
  // 날짜 형식에서 ~ 앞에 줄바꿈 추가하는 함수
  const formatDateWithBreak = (dateStr: string) => {
    if (dateStr.includes('~')) {
      return dateStr.replace(/~/, "<br />~");
    }
    return dateStr;
  };
  
  // 스크롤 시 현재 보이는 연도 감지
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const middlePosition = scrollTop + containerHeight / 3;
      
      // 가장 가까운 연도 찾기
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
    
    // 초기 연도 설정을 위해 한 번 호출
    handleScroll();
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeYear, onYearChange]);
  
  // 연도 요소에 ref 설정하는 함수
  const setYearRef = (el: HTMLDivElement | null, year: number) => {
    yearRefs.current[year] = el;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full py-8 px-12 pb-20 h-full overflow-y-auto"
    >
      {/* 수직 타임라인 라인 */}
      <div className="relative">
        {/* 중앙 세로선 */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary" style={{ height: "calc(100% - 20px)" }} />
        
        {/* 타임라인 이벤트들 */}
        <div className="space-y-16">
          {timelineData.map((yearData) => (
            <div 
              key={yearData.year} 
              className="relative"
              ref={(el) => setYearRef(el, yearData.year)}
            >
              {/* 연도 표시 */}
              <div className="mb-6 flex items-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center z-10">
                  <span className="text-h6 font-bold">{yearData.year}</span>
                </div>
              </div>
              
              {/* 해당 연도의 이벤트들 */}
              <div className="ml-6 space-y-10">
                {yearData.events.map((event) => (
                  <div key={event.id} className="relative pl-10">
                    {/* 연도마커 */}
                    <div className="absolute left-[-2] top-6 w-4 h-4 rounded-full border-2 border-primary bg-white" />
                    
                    {/* 이벤트 날짜 - ~ 앞에서 줄바꿈 */}
                    <div className="absolute left-[-3rem] top-4 text-body font-semibold text-gray-dark w-12 text-right pr-2 leading-tight">
                      <span dangerouslySetInnerHTML={{ __html: formatDateWithBreak(event.date) }} />
                    </div>
                    
                    {/* 이벤트 카드 */}
                    <Link href={`/timeline/${event.id}`}>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        {/* 이미지 영역 */}
                        <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400">
                          이미지
                        </div>
                        {/* 내용 영역 */}
                        <div className="p-4">
                          <h3 className="font-bold text-base line-clamp-2">{event.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileTimeline; 