// 사건 ID별 로컬 썸네일 파일명 매핑.
// TODO(Step 3): BE가 제공하는 ImageMeta(url, source, license, ...)로 교체.
//   현재는 public/img/* 정적 이미지를 가리키며 출처/라이선스 정보가 없는 상태로,
//   저작권 검증을 거친 후 위키미디어/공공기관 이미지로 단계적 대체 예정.

export const eventImageFileMap: Record<number, string> = {
  1: "yoon-seok-youl-impeachment.jpg", // 윤석열 파면
  2: "martial-law.png", // 12.3 비상계엄 선포
  3: "han-kang-writer.jpg", // 한강 작가 노벨상 수상
  4: "snu-n-room.webp", // 서울대 N번방 사건
  5: "medical-resident-strike.jpg", // 전공의 파업
  6: "seo2 elementary.jpg", // 서울서이초 교사 사망 사건
  7: "itaewon-tragedy.jpg", // 이태원 참사 발생
  8: "yoon-seok-youl-inauguration.jpg", // 윤석열 대통령 취임
  9: "byun-hee-soo.png", // 변희수 하사 성전환 강제전역 사건
  10: "youn-yuh-jung.png", // 윤여정 오스카 수상
  11: "bong-joon-ho.png", // 봉준호 칸영화제 황금종려상 수상
  12: "third-north-south-summit.jpg", // 3차 남북정상회담
  13: "telegram-n-room.png", // 텔레그램 N번방 사건
  14: "park-geun-hye-impeachment.png", // 박근혜 대통령 탄핵
  15: "park-geun-hye-resignation-movement.jpg", // 박근혜 퇴진 촛불집회
  16: "sewol-ferry.jpg", // 세월호 참사
  17: "2008 candlelight protests.jpg", // 미국산 쇠고기 촛불시위
  18: "second-north-south-summit2.jpg", // 2차 남북정상회담
  19: "first-north-south-summit2.jpg", // 1차 남북정상회담
  20: "imf-crisis.jpg", // IMF 외환위기
  21: "civilian-government.jpg", // 문민정부 출범
  22: "seoul-olympics.png", // 서울 올림픽 개최
  23: "june struggle.jpg", // 6월 민주항쟁
  24: "may 18 gwangju democratization.png", // 5.18 광주민주화운동
  25: "1212 military rebellion.jpeg", // 12.12 군사반란
  26: "october-26-incident.png", // 박정희 대통령 암살
  27: "October Restoration.png", // 유신헌법 발표
  28: "jeon-tae-il.png", // 전태일 분신 사건
  29: "kim-shin-jo.png", // 김신조 청와대 습격 사건
  30: "korea-japan-agreement.jpg", // 한일협정 체결
  31: "may-16-coup.jpg", // 5.16 군사정변
  32: "april-19-revolution.png", // 4.19 혁명
  33: "agreement on the korean military armistice.png", // 휴전협정
  34: "korean-war.png", // 한국전쟁
  35: "government-establishment.jpg", // 대한민국 정부 수립
  36: "jeju-april-3.jpg", // 제주 4.3 사건
  37: "liberation-day.jpg", // 광복
  38: "jeju-air 2216.png", // 제주항공 2216편 활주로 이탈 사고
};

const FALLBACK = "/img/default-placeholder.jpg";

/**
 * 사건 ID에 해당하는 로컬 이미지 경로(public/img/*)를 반환한다.
 * BE 연동 후에는 이 함수 대신 ImageMeta.url을 직접 사용한다.
 */
export function getEventImagePath(eventId: number): string {
  const fileName = eventImageFileMap[eventId];
  return fileName ? `/img/${fileName}` : FALLBACK;
}
