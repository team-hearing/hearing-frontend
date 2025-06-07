// 타임라인 데이터 타입 정의
import Link from 'next/link';
import Image from 'next/image';
import { worldHistoryData } from './worldHistoryData';

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

// 이벤트 ID별 이미지 파일명 매핑
const imageFileMap: { [key: number]: string } = {
  1: 'yoon-seok-youl-impeachment.jpg',          // 윤석열 파면
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

// 타임라인 블록 컴포넌트
const TimelineBlock = ({ data }: { data: TimelineData }) => {
  // 해당 연도의 세계사 데이터 찾기
  const worldHistory = worldHistoryData.find(item => item.year === data.year);

  // 이미지 경로 생성 함수
  const getImagePath = (eventId: number) => {
    const fileName = imageFileMap[eventId];
    return fileName ? `/img/${fileName}` : '/img/default-placeholder.jpg';
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* 상단 영역 */}
      <div className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24 w-full">
        {/* 연도별 이벤트 목록 */}
        <div className="pl-16 sm:pl-20 md:pl-24 lg:pl-28">
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto">
            {data.events.map((event) => (
              <div key={event.id} className="min-w-[100px] sm:min-w-[110px] md:min-w-[120px] lg:min-w-[130px] max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
                {/* 이미지 */}
                <Link href={`/timeline/${event.id}`}>
                  <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-30 md:h-38 lg:w-32 lg:h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden rounded-sm">
                    <Image
                      src={getImagePath(event.id)}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 128px) 100vw, 128px"
                      onError={(e) => {
                        // 이미지 로드 실패 시 placeholder 표시
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className = "w-32 h-40 bg-gray-light flex items-center justify-center text-sm text-gray-500 mb-2 cursor-pointer hover:opacity-80 transition-opacity rounded-sm";
                          parent.innerHTML = `<span>이미지</span>`;
                        }
                      }}
                    />
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
        <div className="absolute left-4 sm:left-5 md:left-6 lg:left-8 top-[180px] sm:top-[200px] md:top-[220px] lg:top-[244px] z-10">
          <p className="text-center text-sm sm:text-base md:text-body font-bold">{data.year}</p>
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-primary bg-white flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* 하단 영역 - 세계사 리스트 */}
      <div className="flex items-start gap-1 sm:gap-2 pl-16 sm:pl-20 md:pl-24 lg:pl-28">
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