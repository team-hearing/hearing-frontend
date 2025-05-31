export type QuoteData = {
  eventId: number;
  quote: string;
  author: string;
  authorDesc: string;
  authorInfo: string[];
  images: string[];
};

export const quoteData: QuoteData[] = [
  // 1940~1950년대
  {
    eventId: 4, // 1945.08.15 광복
    quote: "네 소원이 무엇이냐 하고 하느님이 내게 물으시면, 나는 서슴지 않고 '내 소원은 대한 독립이오.'하고 대답할 것이오.",
    author: "김구",
    authorDesc: "독립운동가, 임시정부 주석",
    authorInfo: [
      "1876~1949",
      "대한민국 임시정부 주석",
      "독립운동가",
      "『백범일지』 저자"
    ],
    images: [
      "/images/kim-gu-1.jpg",
      "/images/kim-gu-2.jpg",
      "/images/independence-1.jpg",
      "/images/independence-2.jpg",
      "/images/liberation-1.jpg",
      "/images/liberation-2.jpg",
      "/images/quote-bg-4.jpg",
      "/images/quote-bg-5.jpg"
    ]
  },
  {
    eventId: 5, // 1948.04.03 제주 4.3 사건
    quote: "어디에서든 불의가 존재한다면, 그것은 모든 곳의 정의에 대한 위협이다.",
    author: "마틀 루터 킹 주니어",
    authorDesc: "미국 인권운동가",
    authorInfo: [
      "1929~1968",
      "미국 흑인 민권운동 지도자",
      "1964년 노벨평화상 수상",
      "비폭력 저항 운동 실천"
    ],
    images: [
      "/images/mlk-jeju-1.jpg",
      "/images/mlk-jeju-2.jpg",
      "/images/justice-1.jpg",
      "/images/justice-2.jpg",
      "/images/civil-rights-1.jpg",
      "/images/civil-rights-2.jpg",
      "/images/quote-bg-6.jpg",
      "/images/quote-bg-7.jpg"
    ]
  },
  {
    eventId: 6, // 1948.08.15 대한민국 정부 수립
    quote: "주권은 일반 의지의 행사이며, 그것은 결코 양도될 수 없다",
    author: "장자크 루소",
    authorDesc: "프랑스의 사회계약론자",
    authorInfo: [
      "1712~1778",
      "프랑스 계몽주의 철학자",
      "『사회계약론』 저자",
      "민주주의 이론 확립"
    ],
    images: [
      "/images/rousseau-1.jpg",
      "/images/rousseau-2.jpg",
      "/images/democracy-foundation-1.jpg",
      "/images/democracy-foundation-2.jpg",
      "/images/government-1.jpg",
      "/images/government-2.jpg",
      "/images/quote-bg-8.jpg",
      "/images/quote-bg-9.jpg"
    ]
  },
  {
    eventId: 7, // 1950.06.25 한국전쟁
    quote: "전쟁은 다른 수단에 의한 정치의 단순한 연속이다.",
    author: "카를 폰 클라우제비츠",
    authorDesc: "프로이센 군사 사상가",
    authorInfo: [
      "1780~1831",
      "프로이센 장군",
      "『전쟁론』 저자",
      "근대 군사학의 아버지"
    ],
    images: [
      "/images/clausewitz-1.jpg",
      "/images/clausewitz-2.jpg",
      "/images/war-1.jpg",
      "/images/war-2.jpg",
      "/images/korean-war-1.jpg",
      "/images/korean-war-2.jpg",
      "/images/quote-bg-10.jpg",
      "/images/quote-bg-11.jpg"
    ]
  },
  {
    eventId: 8, // 1953.07.27 휴전협정
    quote: "오직 죽은 자만이 전쟁의 끝을 보았다.",
    author: "플라톤",
    authorDesc: "고대 그리스 철학자",
    authorInfo: [
      "BC 427~ 348",
      "고대 그리스 철학자",
      "아카데미아 설립자",
      "소크라테스의 제자"
    ],
    images: [
      "/images/plato-1.jpg",
      "/images/plato-2.jpg",
      "/images/armistice-1.jpg",
      "/images/armistice-2.jpg",
      "/images/peace-1.jpg",
      "/images/peace-2.jpg",
      "/images/quote-bg-12.jpg",
      "/images/quote-bg-13.jpg"
    ]
  },

  // 1960년대
  {
    eventId: 9, // 1960.04.19 4.19 혁명
    quote: "먹으로 쓴 거짓말은 결코 피로 쓴 사실을 덮을 수 없다",
    author: "루쉰",
    authorDesc: "중국 근현대 문호",
    authorInfo: [
      "1881~1936",
      "중국 근현대 소설가",
      "『아Q정전』 저자",
      "중국 신문화운동 대표"
    ],
    images: [
      "/images/luxun-1.jpg",
      "/images/luxun-2.jpg",
      "/images/april-revolution-1.jpg",
      "/images/april-revolution-2.jpg",
      "/images/truth-1.jpg",
      "/images/truth-2.jpg",
      "/images/quote-bg-14.jpg",
      "/images/quote-bg-15.jpg"
    ]
  },
  {
    eventId: 10, // 1961.05.16 5.16 군사정변
    quote: "힘 없는 정의는 무능이고, 정의 없는 힘은 폭력이다.",
    author: "파스칼",
    authorDesc: "프랑스 수학자, 철학자",
    authorInfo: [
      "1623~1662",
      "프랑스 수학자, 물리학자",
      "『팡세』 저자",
      "확률론 개척자"
    ],
    images: [
      "/images/pascal-1.jpg",
      "/images/pascal-2.jpg",
      "/images/coup-1.jpg",
      "/images/coup-2.jpg",
      "/images/power-justice-1.jpg",
      "/images/power-justice-2.jpg",
      "/images/quote-bg-16.jpg",
      "/images/quote-bg-17.jpg"
    ]
  },

  // 기존 데이터들 (업데이트)
  {
    eventId: 1, // 윤석열 파면 - 2025.04.04
    quote: "대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.",
    author: "대한민국 헌법 제1조 2항",
    authorDesc: "대한민국 헌법",
    authorInfo: [
      "1948년 제헌헌법 제정",
      "현행 헌법 1987년 개정",
      "국민주권 원리 명시",
      "민주공화국 기본원리"
    ],
    images: [
      "/images/constitution-1.jpg",
      "/images/constitution-2.jpg",
      "/images/democracy-1.jpg",
      "/images/democracy-2.jpg",
      "/images/sovereignty-1.jpg",
      "/images/sovereignty-2.jpg",
      "/images/quote-bg-1.jpg",
      "/images/quote-bg-2.jpg"
    ]
  },
  {
    eventId: 2, // 12.3 비상계엄 선포 - 2024.12.03
    quote: "국민들은 계엄령이 더 이상 법이 아님을 깨달았다. 법에 의해 세워지지 않은 정권은 법을 집행할 자격이 없다.",
    author: "줄피카르 알리 부토",
    authorDesc: "파키스탄 전 대통령",
    authorInfo: [
      "1928~1979",
      "파키스탄 대통령, 총리 역임",
      "파키스탄 인민당 창당",
      "민주주의 수호 투쟁"
    ],
    images: [
      "/images/bhutto-1.jpg",
      "/images/bhutto-2.jpg",
      "/images/martial-law-1.jpg",
      "/images/martial-law-2.jpg",
      "/images/constitution-crisis-1.jpg",
      "/images/constitution-crisis-2.jpg",
      "/images/quote-bg-3.jpg",
      "/images/quote-bg-4.jpg"
    ]
  },
  {
    eventId: 3, // 한강 작가 노벨상 수상 - 2024.10.10
    quote: "우리는 누구도 대변하지 않는다. 우리는 우리 자신을 드러낸다.",
    author: "치마만다 은고지 아디치에",
    authorDesc: "나이지리아 출신 작가",
    authorInfo: [
      "1977년 나이지리아 출생",
      "『아메리카나』, 『반달 태양』 저자",
      "비서구 여성 작가의 상징",
      "세계 문학계 다양성 확장"
    ],
    images: [
      "/images/adichie-1.jpg",
      "/images/adichie-2.jpg",
      "/images/literature-diversity-1.jpg",
      "/images/literature-diversity-2.jpg",
      "/images/nobel-literature-1.jpg",
      "/images/nobel-literature-2.jpg",
      "/images/quote-bg-5.jpg",
      "/images/quote-bg-6.jpg"
    ]
  },
  {
    eventId: 16, // 세월호 참사 - 2014.04.16
    quote: "한 명의 죽음은 비극이지만, 100만 명의 죽음은 통계다.",
    author: "에리히 마리아 레마르크",
    authorDesc: "독일의 소설가",
    authorInfo: [
      "1898~1970",
      "독일 소설가",
      "『서부전선 이상없다』 저자",
      "반전 문학의 대표작가"
    ],
    images: [
      "/images/remarque-1.jpg",
      "/images/remarque-2.jpg",
      "/images/memory-tragedy-1.jpg",
      "/images/memory-tragedy-2.jpg",
      "/images/commemoration-1.jpg",
      "/images/commemoration-2.jpg",
      "/images/quote-bg-7.jpg",
      "/images/quote-bg-8.jpg"
    ]
  },
  {
    eventId: 24, // 5.18 광주민주화운동 - 1980.05.18
    quote: "폭군과 군주의 차이는, 군주는 법을 따르고 백성을 법에 따라 다스리며, 자신을 그들의 하인으로 여긴다는 점이다.",
    author: "존 솔즈베리",
    authorDesc: "영국의 철학자이자 사르트르 주교",
    authorInfo: [
      "1110~1180",
      "영국 철학자, 주교",
      "중세 정치사상가",
      "왕권제한론 주창"
    ],
    images: [
      "/images/salisbury-1.jpg",
      "/images/salisbury-2.jpg",
      "/images/gwangju-democracy-1.jpg",
      "/images/gwangju-democracy-2.jpg",
      "/images/tyranny-resistance-1.jpg",
      "/images/tyranny-resistance-2.jpg",
      "/images/quote-bg-9.jpg",
      "/images/quote-bg-10.jpg"
    ]
  }
];

// 사건 ID로 명언 데이터 찾기
export const getQuoteByEventId = (eventId: number): QuoteData | null => {
  return quoteData.find(quote => quote.eventId === eventId) || null;
};

// 기본 명언 (매칭되는 데이터가 없을 때)
export const defaultQuote: QuoteData = {
  eventId: 0,
  quote: "역사는 과거와 현재의 끊임없는 대화이다.",
  author: "E.H. 카",
  authorDesc: "영국의 역사학자, 『역사란 무엇인가』 저자",
  authorInfo: [
    "1892-1982, 영국",
    "케임브리지 대학교 교수",
    "대표작: 『역사란 무엇인가』",
    "실증주의 역사학 비판"
  ],
  images: [
    "/images/default-1.jpg",
    "/images/default-2.jpg",
    "/images/history-1.jpg",
    "/images/history-2.jpg",
    "/images/books-1.jpg",
    "/images/books-2.jpg",
    "/images/quote-bg-default-1.jpg",
    "/images/quote-bg-default-2.jpg"
  ]
}; 