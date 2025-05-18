// 타임라인 데이터 타입 정의
import Link from 'next/link';

export type Event = {
  id: number;
  date: string;
  title: string;
};

export type TimelineData = {
  year: number;
  events: Event[];
};

// 타임라인 블록 컴포넌트
const TimelineBlock = ({ data }: { data: TimelineData }) => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* 상단 영역 */}
      <div className="relative mb-24 w-full">
        {/* 연도별 이벤트 목록 */}
        <div className="pl-28">
          <div className="flex flex-row gap-6 overflow-x-auto">
            {data.events.map((event) => (
              <div key={event.id} className="min-w-[130px] max-w-[180px]">
                {/* 이미지 */}
                <Link href={`/timeline/${event.id}`}>
                  <div className="w-32 h-40 bg-gray-light flex items-center justify-center text-sm text-gray-500 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    이미지
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
            ))}
          </div>
        </div>

        {/* 연도 마커 */}
        <div className="absolute left-8 top-[244px] z-10">
          <p className="text-center text-body font-bold">{data.year}</p>
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
  );
};

export default TimelineBlock; 