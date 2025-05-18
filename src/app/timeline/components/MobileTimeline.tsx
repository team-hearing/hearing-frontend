import { timelineData } from "./timelineData";
import Link from "next/link";

const MobileTimeline = () => {
  return (
    <div className="w-full py-8 px-12 pb-20">
      {/* 수직 타임라인 라인 */}
      <div className="relative">
        {/* 중앙 세로선 */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary" style={{ height: "calc(100% - 20px)" }} />
        
        {/* 타임라인 이벤트들 */}
        <div className="space-y-16">
          {timelineData.map((yearData) => (
            <div key={yearData.year} className="relative">
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
                    
                    {/* 이벤트 날짜 */}
                    <div className="absolute left-[-3rem] top-4 text-body font-semibold text-gray-dark w-12 text-right pr-2">
                      {event.date}
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