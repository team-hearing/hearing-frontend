import { timelineData } from "./timelineData";
import { worldHistoryData } from "./worldHistoryData";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Earth } from "lucide-react";

interface MobileTimelineProps {
  onYearChange?: (year: number) => void;
}

// 이벤트 ID별 이미지 파일명 매핑 (TimelineBlock.tsx와 동일)
const imageFileMap: { [key: number]: string } = {
  1: 'yoon-seok-youl-impeachment.jpg',          // 윤석열 탄핵핵
  2: 'martial-law.png',                         // 12.3 비상계엄 선포
  3: 'han-kang-writer.jpg',                     // 한강 작가 노벨상 수상
  4: 'snu-n-room.webp',                         // 서울대 N번방 사건
  5: 'medical-resident-strike.jpg',             // 전공의 파업
  6: 'seo2 elementary.jpg',                     // 서울서이초 교사 사망 사건
  7: 'itaewon-tragedy.jpg',                     // 이태원 참사 발생
  8: 'yoon-seok-youl-inauguration.jpg',         // 윤석열 대통령 취임
  9: 'byun-hee-soo.png',                        // 변희수 하사 성전환 강제전역 사건
  10: 'youn-yuh-jung.png',                      // 윤여정 오스카 수상
  11: 'bong-joon-ho.png',                       // 봉준호 칸영화제 황금종려상 수상
  12: 'third-north-south-summit.jpg',           // 3차 남북정상회담
  13: 'telegram-n-room.png',                    // 텔레그램 N번방 사건
  14: 'park-geun-hye-impeachment.png',          // 박근혜 대통령 탄핵
  15: 'park-geun-hye-resignation-movement.jpg', // 박근혜 퇴진 촛불집회
  16: 'sewol-ferry.jpg',                        // 세월호 참사
  17: '2008 candlelight protests.jpg',          // 미국산 쇠고기 촛불시위
  18: 'second-north-south-summit2.jpg',         // 2차 남북정상회담 (새 이미지)
  19: 'first-north-south-summit2.jpg',          // 1차 남북정상회담 (새 이미지)
  20: 'imf-crisis.jpg',                         // IMF 외환위기
  21: 'civilian-government.jpg',                // 문민정부 출범
  22: 'seoul-olympics.png',                     // 서울 올림픽 개최
  23: 'june struggle.jpg',                      // 6월 민주항쟁 (새 이미지)
  24: 'may 18 gwangju democratization.png',     // 5.18 광주민주화운동
  25: '1212 military rebellion.jpeg',           // 12.12 군사반란
  26: 'october-26-incident.png',                // 박정희 대통령 암살
  27: 'October Restoration.png',                // 유신헌법 발표
  28: 'jeon-tae-il.png',                        // 전태일 분신 사건
  29: 'kim-shin-jo.png',                        // 김신조 청와대 습격 사건
  30: 'korea-japan-agreement.jpg',              // 한일협정 체결
  31: 'may-16-coup.jpg',                        // 5.16 군사정변
  32: 'april-19-revolution.png',                // 4.19 혁명
  33: 'agreement on the korean military armistice.png', // 휴전협정
  34: 'korean-war.png',                         // 한국전쟁
  35: 'government-establishment.jpg',           // 대한민국 정부 수립
  36: 'jeju-april-3.jpg',                       // 제주 4.3 사건
  37: 'liberation-day.jpg',                     // 광복
  38: 'jeju-air 2216.png',                      // 제주항공 2216편 활주로 이탈 사고
};

const MobileTimeline = ({ onYearChange }: MobileTimelineProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<{[key: number]: HTMLDivElement | null}>({});
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [showWorldHistory, setShowWorldHistory] = useState<{[key: number]: boolean}>({});
  
  const formatDateWithBreak = (dateStr: string) => {
    // if (dateStr.includes('~')) {
    //   return dateStr.replace(/~/, "<br />~");
    // }
    return dateStr;
  };

  // 이미지 경로 생성 함수
  const getImagePath = (eventId: number) => {
    const fileName = imageFileMap[eventId];
    return fileName ? `/img/${fileName}` : '/img/default-placeholder.jpg';
  };

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
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-medium-dark"></div>

        {timelineData.map((yearData) => {
          const worldHistory = worldHistoryData.find(item => item.year === yearData.year);
          
          return (
            <div 
              key={yearData.year}
              ref={(el) => setYearRef(el, yearData.year)}
              className="pl-12 relative mb-8"
            >
              {/* 연도 마커*/}
              <div className="absolute left-2.5 top-0 w-4 h-4 bg-gray-medium-dark rounded-full"></div>
              
              {/*연도 제목*/}
              <div className="text-lg font-semibold mb-4 text-primary">{yearData.year}년</div>
              
              {/* 컨텐츠 */}
              {yearData.events.map((event) => (
                <div key={event.id} className="mb-6">
                  <div className="text-sm font-regular mb-1">
                    <span className="text-primary font-regular">{yearData.year}.</span>
                    <span dangerouslySetInnerHTML={{ __html: formatDateWithBreak(event.date) }} />
                  </div>
                  
                  <Link href={`/timeline/${event.id}`}>
                    <div className="bg-gray-light rounded-sm mt-2 hover:bg-gray-light transition-colors relative h-48 flex items-end overflow-hidden">
                      {/* 실제 이미지 표시 */}
                      <Image
                        src={getImagePath(event.id)}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(e) => {
                          // 이미지 로드 실패 시 placeholder 표시
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const placeholderDiv = document.createElement('div');
                            placeholderDiv.className = "absolute inset-0 flex items-center justify-center text-gray-medium text-sm bg-gray-light";
                            placeholderDiv.textContent = "이미지";
                            parent.appendChild(placeholderDiv);
                          }
                        }}
                      />
                      {/* 텍스트 오버레이 */}
                      <div className="w-full p-2 relative z-10 bg-black bg-opacity-50 text-white font-semibold text-base">
                        {event.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

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