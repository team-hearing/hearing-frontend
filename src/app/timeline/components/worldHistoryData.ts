export type WorldEvent = {
  id: number;
  title: string;
  region?: string;
};

export type YearWorldHistory = {
  year: number;
  events: WorldEvent[];
};

export const worldHistoryData: YearWorldHistory[] = [
  {
    year: 2025,
    events: [
      { id: 1, title: "트럼프 재집권", region: "미국" },
      { id: 2, title: "프란치스코 교황 서거 및 레오 14세 교황 선출", region: "바티칸" }
    ]
  },
  {
    year: 2024,
    events: [
      { id: 3, title: "우크라이나 전쟁 지속", region: "유럽" },
      { id: 4, title: "중국 경제 침체", region: "중국" },
      { id: 5, title: "미국 대선", region: "미국" },
      { id: 6, title: "파리 올림픽", region: "프랑스" },
      { id: 7, title: "중동 분쟁 지속", region: "중동" }
    ]
  },
  {
    year: 2023,
    events: [
      { id: 8, title: "인공지능(AI) 대중화(생성형 AI 확산)", region: "전세계" },
      { id: 9, title: "러시아 우크라이나 침공 지속", region: "유럽" },
      { id: 10, title: "튀르키예 대지진", region: "튀르키예" }
    ]
  },
  {
    year: 2022,
    events: [
      { id: 7, title: "러시아 우크라이나 침공", region: "유럽" },
      { id: 8, title: "시진핑 3연임", region: "중국" },
      { id: 9, title: "엘리자베스 2세 여왕 서거", region: "영국" }
    ]
  },
  {
    year: 2021,
    events: [
      { id: 15, title: "바이든 미국 대통령 취임", region: "미국" },
      { id: 16, title: "아프가니스탄 미군 철수", region: "아프가니스탄" },
      { id: 17, title: "코로나19 백신 보급", region: "전세계" },
      { id: 18, title: "탈레반 재집권", region: "아프가니스탄" }
    ]
  },
  {
    year: 2020,
    events: [
      { id: 19, title: "코로나19 팬데믹", region: "전세계" },
      { id: 20, title: "조지 플로이드 사건", region: "미국" }
    ]
  },
  {
    year: 2019,
    events: [
      { id: 21, title: "홍콩 민주화 시위", region: "홍콩" },
      { id: 22, title: "브렉시트 논란", region: "영국" },
      { id: 23, title: "트럼프 탄핵 조사 개시", region: "미국" },
      { id: 24, title: "코로나19 바이러스 중국 우한서 첫 보고", region: "중국" }
    ]
  },
  {
    year: 2018,
    events: [
      { id: 25, title: "미중 무역전쟁 시작", region: "미국/중국" },
      { id: 26, title: "브라질 극우 보우소나루 대통령 당선", region: "브라질" },
      { id: 27, title: "프랑스 노란조끼 시위 시작", region: "프랑스" }
    ]
  },
  {
    year: 2017,
    events: [
      { id: 28, title: "트럼프 미국 대통령 취임", region: "미국" },
      { id: 29, title: "미국 파리기후협정 탈퇴 선언", region: "미국" },
      { id: 30, title: "프랑스 마크롱 대통령 당선", region: "프랑스" },
      { id: 31, title: "북한 대륙간탄도미사일(ICBM) 시험발사", region: "북한" }
    ]
  },
  {
    year: 2016,
    events: [
      { id: 32, title: "트럼프 대선 승리", region: "미국" },
      { id: 33, title: "브렉시트 국민투표", region: "영국" },
      { id: 34, title: "쿠바 피델 카스트로 사망", region: "쿠바" }
    ]
  },
  {
    year: 2014,
    events: [
      { id: 35, title: "러시아 크림반도 병합", region: "우크라이나" },
      { id: 36, title: "이슬람국가(IS) 시리아·이라크 점령", region: "중동" },
      { id: 37, title: "에볼라 바이러스 서아프리카 대유행", region: "아프리카" }
    ]
  },
  {
    year: 2008,
    events: [
      { id: 38, title: "글로벌 금융위기", region: "전세계" },
      { id: 39, title: "오바마 미국 대통령 당선", region: "미국" },
      { id: 40, title: "베이징 올림픽", region: "중국" }
    ]
  },
  {
    year: 2007,
    events: [
      { id: 41, title: "아이폰 첫 출시", region: "미국" },
      { id: 42, title: "미얀마 사프란 혁명", region: "미얀마" }
    ]
  },
  {
    year: 2001,
    events: [
      { id: 43, title: "9.11 테러", region: "미국" }
    ]
  },
  {
    year: 2000,
    events: [
      { id: 44, title: "밀레니엄 버그 우려", region: "전세계" },
      { id: 45, title: "러시아 푸틴 대통령 취임", region: "러시아" },
      { id: 46, title: "유고연방 밀로셰비치 정권 붕괴", region: "유고슬라비아" }
    ]
  },
  {
    year: 1997,
    events: [
      { id: 47, title: "아시아 금융위기", region: "아시아" },
      { id: 48, title: "영국 홍콩을 중국에 반환", region: "홍콩" },
      { id: 49, title: "교토의정서 채택", region: "전세계" }
    ]
  },
  {
    year: 1993,
    events: [
      { id: 50, title: "유럽연합(EU) 공식 출범", region: "유럽" },
      { id: 51, title: "남아프리카공화국 인종차별 철폐", region: "남아프리카" },
      { id: 52, title: "우루과이 라운드 타결", region: "전세계" }
    ]
  },
  {
    year: 1991,
    events: [
      { id: 53, title: "소련 해체", region: "소련" },
      { id: 54, title: "걸프전", region: "중동" }
    ]
  },
  {
    year: 1989,
    events: [
      { id: 55, title: "베를린 장벽 붕괴", region: "독일" },
      { id: 56, title: "천안문 사태", region: "중국" }
    ]
  },
  {
    year: 1988,
    events: [
      { id: 57, title: "소련 페레스트로이카", region: "소련" },
      { id: 58, title: "이란-이라크 전쟁 종전", region: "중동" }
    ]
  },
  {
    year: 1987,
    events: [
      { id: 59, title: "미·소 중거리핵전력(INF) 폐기 협정 체결", region: "미국/소련" },
      { id: 60, title: "필리핀 마르코스 독재 종식", region: "필리핀" },
      { id: 61, title: "팔레스타인 제1차 인티파다 시작", region: "팔레스타인" }
    ]
  },
  {
    year: 1986,
    events: [
      { id: 62, title: "체르노빌 원전 사고", region: "소련" }
    ]
  },
  {
    year: 1980,
    events: [
      { id: 63, title: "이란-이라크 전쟁 발발", region: "중동" },
      { id: 64, title: "미국 모스크바 올림픽 보이콧", region: "소련" },
      { id: 65, title: "레흐 바웬사 폴란드 자유노조 결성", region: "폴란드" }
    ]
  },
  {
    year: 1979,
    events: [
      { id: 66, title: "이란 혁명", region: "이란" },
      { id: 67, title: "소련 아프간 침공", region: "아프가니스탄" },
      { id: 68, title: "중국 개혁개방 정책 시작", region: "중국" }
    ]
  },
  {
    year: 1975,
    events: [
      { id: 69, title: "베트남 전쟁 종료", region: "베트남" }
    ]
  },
  {
    year: 1973,
    events: [
      { id: 70, title: "제1차 석유파동", region: "중동" }
    ]
  },
  {
    year: 1972,
    events: [
      { id: 71, title: "닉슨 중국 방문", region: "미국/중국" },
      { id: 72, title: "SALT I 미·소 전략무기제한협정 체결", region: "미국/소련" },
      { id: 73, title: "워터게이트 사건 발발", region: "미국" }
    ]
  },
  {
    year: 1970,
    events: [
      { id: 74, title: "미국 환경보호청(EPA) 설립", region: "미국" },
      { id: 75, title: "칠레 살바도르 아옌데 대통령 당선", region: "칠레" },
      { id: 76, title: "캄보디아 내전 격화", region: "캄보디아" }
    ]
  },
  {
    year: 1969,
    events: [
      { id: 77, title: "아폴로 11호 달 착륙", region: "미국" }
    ]
  },
  {
    year: 1968,
    events: [
      { id: 78, title: "68혁명", region: "프랑스" },
      { id: 79, title: "마틴 루터 킹 암살", region: "미국" },
      { id: 80, title: "프라하의 봄과 소련의 체코슬로바키아 침공", region: "체코슬로바키아" }
    ]
  },
  {
    year: 1965,
    events: [
      { id: 81, title: "미국 베트남 북폭 개시", region: "베트남" },
      { id: 82, title: "인도네시아 9·30 사태", region: "인도네시아" },
      { id: 83, title: "말콤 X 암살", region: "미국" }
    ]
  },
  {
    year: 1962,
    events: [
      { id: 84, title: "쿠바 미사일 위기", region: "쿠바" }
    ]
  },
  {
    year: 1961,
    events: [
      { id: 85, title: "베를린 장벽 건설", region: "독일" },
      { id: 86, title: "유리 가가린 우주비행", region: "소련" },
      { id: 87, title: "미국 피그스만 침공 실패", region: "쿠바" }
    ]
  },
  {
    year: 1960,
    events: [
      { id: 88, title: "아프리카 독립의 해", region: "아프리카" },
      { id: 89, title: "미국 흑인 민권운동 본격화", region: "미국" },
      { id: 90, title: "OPEC 석유수출국기구 창설", region: "중동" }
    ]
  },
  {
    year: 1957,
    events: [
      { id: 91, title: "스푸트니크 발사", region: "소련" }
    ]
  },
  {
    year: 1953,
    events: [
      { id: 92, title: "스탈린 사망", region: "소련" },
      { id: 93, title: "쿠바 피델 카스트로 몬카다 병영 습격 (쿠바 혁명 서막)", region: "쿠바" }
    ]
  },
  {
    year: 1950,
    events: [
      { id: 94, title: "애치슨 선언", region: "미국" },
      { id: 95, title: "티베트 중국에 병합", region: "중국" }
    ]
  },
  {
    year: 1949,
    events: [
      { id: 96, title: "중화인민공화국 건국", region: "중국" },
      { id: 97, title: "NATO 창설", region: "서구" }
    ]
  },
  {
    year: 1948,
    events: [
      { id: 98, title: "이스라엘 건국", region: "중동" },
      { id: 99, title: "마셜 플랜", region: "유럽" },
      { id: 100, title: "베를린 봉쇄 시작", region: "독일" },
      { id: 101, title: "세계인권선언 채택", region: "전세계" }
    ]
  },
  {
    year: 1945,
    events: [
      { id: 102, title: "제2차 세계대전 종료", region: "전세계" },
      { id: 103, title: "히로시마/나가사키 원폭", region: "일본" },
      { id: 104, title: "UN 창설", region: "전세계" },
      { id: 105, title: "얄타 회담 개최", region: "전세계" },
      { id: 106, title: "독일 연합군에 항복", region: "독일" }
    ]
  }
]; 