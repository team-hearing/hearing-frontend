export type QuoteData = {
  eventId: number;
  quote: string;
  author: string;
  authorDesc: string;
  authorInfo: string[];
  images: string[];
};

export const quoteData: QuoteData[] = [
  // 2025년
  {
    eventId: 1, // 2025.04.04 윤석열 파면 (timelineData id: 1)
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

  // 2024년
  {
    eventId: 38, // 2024.12.29 제주항공 2216편 활주로 이탈 사고 (timelineData id: 38)
    quote: "죽음은 그렇게 쉽게 끝나지 않는다. 살아남은 자들의 가슴 속에서 계속해서 파문을 일으킨다.",
    author: "한강 (Han Kang, 1970~)",
    authorDesc: "대한민국 작가, 노벨 문학상 수상자",
    authorInfo: [
      "1970년 대한민국 출생",
      "2024년 노벨 문학상 수상",
      "『채식주의자』, 『소년이 온다』 저자",
      "인간의 상처와 회복을 다루는 작가"
    ],
    images: [
      "/images/saint-exupery-1.jpg",
      "/images/saint-exupery-2.jpg",
      "/images/aviation-safety-1.jpg",
      "/images/aviation-safety-2.jpg",
      "/images/jeju-air-1.jpg",
      "/images/jeju-air-2.jpg",
      "/images/quote-bg-88.jpg",
      "/images/quote-bg-89.jpg"
    ]
  },
  {
    eventId: 2, // 2024.12.03 12.3 비상계엄 선포 (timelineData id: 2)
    quote: "국민들은 계엄령이 더 이상 법이 아님을 깨달았다. 법에 의해 세워지지 않은 정권은 법을 집행할 자격이 없다.",
    author: "줄피카르 알리 부토 (Zulfikar Ali Bhutto, 1928~1979)",
    authorDesc: "파키스탄 전 대통령",
    authorInfo: [
      "파키스탄 대통령, 총리 역임",
      "파키스탄 인민당 창당",
      "민주주의 수호 투쟁",
      "1979년 처형당함"
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
    eventId: 3, // 2024.10.10 한강 작가 노벨상 수상 (timelineData id: 3)
    quote: "우리는 누구도 대변하지 않는다. 우리는 우리 자신을 드러낸다.",
    author: "치마만다 은고지 아디치에 (Chimamanda Ngozi Adichie, 1977~)",
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
    eventId: 4, // 2024.05~08 서울대 N번방 사건 (timelineData id: 4)
    quote: "온 세상이 침묵할때, 하나의 목소리도 강력해진다.",
    author: "말랄라 유사프자이 (Malala Yousafzai, 1997~)",
    authorDesc: "파키스탄 운동가, 노벨평화상 수상자",
    authorInfo: [
      "1997년 출생",
      "파키스탄 여성교육 운동가",
      "2014년 노벨평화상 수상",
      "최연소 노벨상 수상자"
    ],
    images: [
      "/images/malala-1.jpg",
      "/images/malala-2.jpg",
      "/images/voice-silence-1.jpg",
      "/images/voice-silence-2.jpg",
      "/images/digital-crime-1.jpg",
      "/images/digital-crime-2.jpg",
      "/images/quote-bg-60.jpg",
      "/images/quote-bg-61.jpg"
    ]
  },
  {
    eventId: 5, // 2024.02.19 전공의 파업 (timelineData id: 5)
    quote: "인생은 짧고, 의술의 길은 길며, 기회는 순식간에 지나가고, 경험은 불완전하고, 판단은 어렵다. 따라서 의사는 올바른 일을 하는 것뿐만 아니라, 환자와 간병인, 외부인 모두가 협조하도록 준비해야 한다.",
    author: "히포크라테스 (Hippocrates, BC 460?~BC 377?)",
    authorDesc: "고대 그리스 의학자, '의학의 아버지'",
    authorInfo: [
      "BC 460?~BC 377?",
      "고대 그리스 의학자",
      "의학의 아버지",
      "히포크라테스 선서 창시자"
    ],
    images: [
      "/images/hippocrates-1.jpg",
      "/images/hippocrates-2.jpg",
      "/images/medical-ethics-1.jpg",
      "/images/medical-ethics-2.jpg",
      "/images/doctor-strike-1.jpg",
      "/images/doctor-strike-2.jpg",
      "/images/quote-bg-58.jpg",
      "/images/quote-bg-59.jpg"
    ]
  },

  // 2023년
  {
    eventId: 6, // 2023.07.18 서울서이초 교사 사망 사건 (timelineData id: 6)
    quote: "마음은 채워야 할 그릇이 아니라, 지펴야 할 불이다.",
    author: "플루타르코스 (Plutarch, AD 46~AD 120)",
    authorDesc: "고대 그리스 철학자, 정치인",
    authorInfo: [
      "AD 46~AD 120",
      "고대 그리스 철학자",
      "『플루타르코스 영웅전』 저자",
      "교육론의 선구자"
    ],
    images: [
      "/images/plutarch-1.jpg",
      "/images/plutarch-2.jpg",
      "/images/education-fire-1.jpg",
      "/images/education-fire-2.jpg",
      "/images/teacher-memorial-1.jpg",
      "/images/teacher-memorial-2.jpg",
      "/images/quote-bg-56.jpg",
      "/images/quote-bg-57.jpg"
    ]
  },

  // 2022년
  {
    eventId: 7, // 2022.10.29 이태원 참사 발생 (timelineData id: 7)
    quote: "죄의 혐의가 의심스러울때는 가볍게 벌을 주고, 공이 의심스러울때는 무겁게 보상하라.",
    author: "서경 (Book of Documents)",
    authorDesc: "중국 고전 경서",
    authorInfo: [
      "중국 고대 경서",
      "오경 중 하나",
      "상나라와 주나라 역사 기록",
      "정치와 도덕의 가르침"
    ],
    images: [
      "/images/book-of-documents-1.jpg",
      "/images/book-of-documents-2.jpg",
      "/images/itaewon-tragedy-1.jpg",
      "/images/itaewon-tragedy-2.jpg",
      "/images/justice-mercy-1.jpg",
      "/images/justice-mercy-2.jpg",
      "/images/quote-bg-54.jpg",
      "/images/quote-bg-55.jpg"
    ]
  },
  {
    eventId: 8, // 2022.05.10 윤석열 대통령 취임 (timelineData id: 8)
    quote: "한 나라의 정치는 그 자체가 나라를 구성하고 있는 사람들의 반영에 지나지 않는다. 국민을 앞선 훌륭한 정부는 국민과 같은 수준으로 내려갈 것이요, 국민보다 뒤쳐진 정부는 국민의 수준과 동등하게 올라갈 것이다.",
    author: "새뮤얼 스마일즈 (Samuel Smiles, 1812~1904)",
    authorDesc: "영국 작가",
    authorInfo: [
      "1812~1904",
      "영국 작가",
      "『자조론』 저자",
      "자기계발서의 선구자"
    ],
    images: [
      "/images/samuel-smiles-1.jpg",
      "/images/samuel-smiles-2.jpg",
      "/images/government-people-1.jpg",
      "/images/government-people-2.jpg",
      "/images/presidency-1.jpg",
      "/images/presidency-2.jpg",
      "/images/quote-bg-52.jpg",
      "/images/quote-bg-53.jpg"
    ]
  },

  // 2021년
  {
    eventId: 9, // 2021.08.24 변희수 하사 성전환 강제전역 사건 (timelineData id: 9)
    quote: "모든 사람은 태어날 때부터 자유롭고, 존엄하며, 평등하다. 모든 사람은 이성과 양심을 가지고 있으므로 서로에게 형제애의 정신으로 대해야 한다.",
    author: "세계인권선언 제1조",
    authorDesc: "국제연합 세계인권선언",
    authorInfo: [
      "1948년 12월 10일 채택",
      "국제연합 총회",
      "인권의 보편적 기준",
      "30개 조항으로 구성"
    ],
    images: [
      "/images/human-rights-1.jpg",
      "/images/human-rights-2.jpg",
      "/images/equality-1.jpg",
      "/images/equality-2.jpg",
      "/images/dignity-1.jpg",
      "/images/dignity-2.jpg",
      "/images/quote-bg-50.jpg",
      "/images/quote-bg-51.jpg"
    ]
  },
  {
    eventId: 10, // 2021.04.25 윤여정 오스카 수상 (timelineData id: 10)
    quote: "성공은 최종 목적지가 아니라 여정이다.",
    author: "아서 애시 (Arthur Ashe, 1943~1993)",
    authorDesc: "미국의 프로 테니스 선수",
    authorInfo: [
      "1943~1993",
      "미국 프로 테니스 선수",
      "아프리카계 미국인 최초 윔블던 우승",
      "사회운동가"
    ],
    images: [
      "/images/arthur-ashe-1.jpg",
      "/images/arthur-ashe-2.jpg",
      "/images/success-journey-1.jpg",
      "/images/success-journey-2.jpg",
      "/images/oscar-win-1.jpg",
      "/images/oscar-win-2.jpg",
      "/images/quote-bg-48.jpg",
      "/images/quote-bg-49.jpg"
    ]
  },

  // 2019년
  {
    eventId: 11, // 2019.05.25 봉준호 칸영화제 황금종려상 수상 (timelineData id: 11)
    quote: "예술은 삶을 모방하고, 삶은 예술을 모방한다.",
    author: "오스카 와일드 (Oscar Wilde, 1854~1900)",
    authorDesc: "영국 소설가, 극작가",
    authorInfo: [
      "1854~1900",
      "영국 소설가, 극작가",
      "유미주의 문학 운동 대표",
      "『도리언 그레이의 초상』 저자"
    ],
    images: [
      "/images/oscar-wilde-1.jpg",
      "/images/oscar-wilde-2.jpg",
      "/images/art-life-1.jpg",
      "/images/art-life-2.jpg",
      "/images/cannes-1.jpg",
      "/images/cannes-2.jpg",
      "/images/quote-bg-46.jpg",
      "/images/quote-bg-47.jpg"
    ]
  },

  // 2018년
  {
    eventId: 12, // 2018.04.27 3차 남북정상회담 (timelineData id: 12)
    quote: "평화는 단순히 갈등이 없는 상태가 아니라, 갈등을 평화로운 수단으로 해결하는 능력이다.",
    author: "로널드 레이건 (Ronald Reagan, 1911~2004)",
    authorDesc: "미국 제40대 대통령",
    authorInfo: [
      "1911~2004",
      "미국 제40대 대통령",
      "전 영화배우",
      "냉전 종식 기여"
    ],
    images: [
      "/images/ronald-reagan-1.jpg",
      "/images/ronald-reagan-2.jpg",
      "/images/peace-conflict-1.jpg",
      "/images/peace-conflict-2.jpg",
      "/images/inter-korean-summit3-1.jpg",
      "/images/inter-korean-summit3-2.jpg",
      "/images/quote-bg-70.jpg",
      "/images/quote-bg-71.jpg"
    ]
  },
  {
    eventId: 13, // 2017~2018 텔레그램 N번방 사건 (timelineData id: 13)
    quote: "너는 너 자신의 인격에서나 다른 모든 사람의 인격에서나 인간성을 언제나 동시에 목적으로서 대하고 한낱 수단으로 대하지 않도록 그렇게 행하라.",
    author: "임마누엘 칸트 (Immanuel Kant, 1724~1804)",
    authorDesc: "독일 철학자",
    authorInfo: [
      "1724~1804",
      "독일 철학자",
      "『순수이성비판』 저자",
      "정언명령 이론 창시자"
    ],
    images: [
      "/images/immanuel-kant-1.jpg",
      "/images/immanuel-kant-2.jpg",
      "/images/human-dignity-1.jpg",
      "/images/human-dignity-2.jpg",
      "/images/digital-ethics-1.jpg",
      "/images/digital-ethics-2.jpg",
      "/images/quote-bg-68.jpg",
      "/images/quote-bg-69.jpg"
    ]
  },

  // 2017년
  {
    eventId: 14, // 2017.03.10 박근혜 대통령 탄핵 (timelineData id: 14)
    quote: "법 앞에 모든 국민은 평등하다.",
    author: "대한민국 헌법 제11조 인용",
    authorDesc: "대한민국 헌법",
    authorInfo: [
      "1834~1902",
      "영국 역사학자",
      "케임브리지 대학교 교수",
      "권력 분산론 주창"
    ],
    images: [
      "/images/acton-power-1.jpg",
      "/images/acton-power-2.jpg",
      "/images/park-impeachment-1.jpg",
      "/images/park-impeachment-2.jpg",
      "/images/candlelight-1.jpg",
      "/images/candlelight-2.jpg",
      "/images/quote-bg-42.jpg",
      "/images/quote-bg-43.jpg"
    ]
  },

  // 2016년
  {
    eventId: 15, // 2016.10.29 박근혜 퇴진 촛불집회 (timelineData id: 15)
    quote: "나는 당신의 의견에 동의하지 않지만, 당신이 그 의견을 말할 권리를 위해 싸울 것이다.",
    author: "에블린 비어트리스 홀 (Evelyn Beatrice Hall, 1868~1956)",
    authorDesc: "영국 작가",
    authorInfo: [
      "1868~1956",
      "영국 작가",
      "볼테르 전기 저자",
      "표현의 자유 옹호자"
    ],
    images: [
      "/images/evelyn-hall-1.jpg",
      "/images/evelyn-hall-2.jpg",
      "/images/free-speech-1.jpg",
      "/images/free-speech-2.jpg",
      "/images/candlelight-rally-1.jpg",
      "/images/candlelight-rally-2.jpg",
      "/images/quote-bg-66.jpg",
      "/images/quote-bg-67.jpg"
    ]
  },

  // 2014년
  {
    eventId: 16, // 2014.04.16 세월호 참사 (timelineData id: 16)
    quote: "한 명의 죽음은 비극이지만, 100만 명의 죽음은 통계다.",
    author: "에리히 마리아 레마르크 (Erich Maria Remarque, 1898~1970)",
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

  // 2008년
  {
    eventId: 17, // 2008.06.10 미국산 쇠고기 촛불시위 (timelineData id: 17)
    quote: "민주주의는 투표를 세는 것만이 아니라, 사람들이 행동에 나서는 것이다. 그것은 사람들이 거리로 나와 목소리를 내고, 권리를 위해 싸우는 과정에서 살아난다.",
    author: "하워드 진 (Howard Zinn, 1922~2010)",
    authorDesc: "미국 역사학자, 사회운동가",
    authorInfo: [
      "1922~2010",
      "미국 역사학자",
      "『미국 민중사』 저자",
      "반전평화 운동가"
    ],
    images: [
      "/images/howard-zinn-1.jpg",
      "/images/howard-zinn-2.jpg",
      "/images/democracy-action-1.jpg",
      "/images/democracy-action-2.jpg",
      "/images/candlelight-protest-1.jpg",
      "/images/candlelight-protest-2.jpg",
      "/images/quote-bg-64.jpg",
      "/images/quote-bg-65.jpg"
    ]
  },

  // 2007년
  {
    eventId: 18, // 2007.10.03~05 2차 남북정상회담 (timelineData id: 18)
    quote: "용서하고 화해하는 것은 상황을 다르게 보이게 하려는 것이 아닙니다. 서로 등을 두드리며 잘못을 외면하는 것도 아닙니다. 진정한 화해는 그 끔찍함, 학대, 고통, 타락, 진실을 드러냅니다. 때로는 상황을 더 악화시킬 수도 있습니다. 이는 위험한 시도이지만 결국 그만한 가치가 있습니다. 왜냐하면 결국 현실을 정직하게 마주하는 것만이 진정한 치유를 가져올 수 있기 때문입니다.",
    author: "데스몬드 투투 (Desmond Tutu, 1931~2021)",
    authorDesc: "남아프리카 공화국 성공회 명예 대주교",
    authorInfo: [
      "1931~2021",
      "남아공 성공회 대주교",
      "1984년 노벨평화상 수상",
      "반아파르트헤이트 운동가"
    ],
    images: [
      "/images/desmond-tutu-1.jpg",
      "/images/desmond-tutu-2.jpg",
      "/images/reconciliation-1.jpg",
      "/images/reconciliation-2.jpg",
      "/images/inter-korean-summit2-1.jpg",
      "/images/inter-korean-summit2-2.jpg",
      "/images/quote-bg-62.jpg",
      "/images/quote-bg-63.jpg"
    ]
  },

  // 2000년
  {
    eventId: 19, // 2000.06.13~15 1차 남북정상회담 (timelineData id: 19)
    quote: "대화는 갈등을 해소하고 평화를 구축하는 유일한 방법이다.",
    author: "코피 아난 (Kofi Annan, 1938~2018)",
    authorDesc: "전 유엔 사무총장",
    authorInfo: [
      "1938~2018",
      "가나 출신 외교관",
      "제7대 유엔 사무총장",
      "2001년 노벨평화상 수상"
    ],
    images: [
      "/images/kofi-annan-1.jpg",
      "/images/kofi-annan-2.jpg",
      "/images/dialogue-peace-1.jpg",
      "/images/dialogue-peace-2.jpg",
      "/images/inter-korean-summit1-1.jpg",
      "/images/inter-korean-summit1-2.jpg",
      "/images/quote-bg-76.jpg",
      "/images/quote-bg-77.jpg"
    ]
  },

  // 1997년
  {
    eventId: 20, // 1997.12.18 IMF 외환위기 (timelineData id: 20)
    quote: "우리는 하나의 국가이며, 함께 뭉칠 때 우리가 해내지 못할 일은 없습니다.",
    author: "버락 오바마 (Barack Obama, 1961~)",
    authorDesc: "미국 제44대 대통령",
    authorInfo: [
      "1961년 출생",
      "미국 제44대 대통령",
      "최초 아프리카계 미국인 대통령",
      "노벨평화상 수상자"
    ],
    images: [
      "/images/barack-obama-1.jpg",
      "/images/barack-obama-2.jpg",
      "/images/unity-strength-1.jpg",
      "/images/unity-strength-2.jpg",
      "/images/imf-crisis-1.jpg",
      "/images/imf-crisis-2.jpg",
      "/images/quote-bg-74.jpg",
      "/images/quote-bg-75.jpg"
    ]
  },

  // 1993년
  {
    eventId: 21, // 1993.02.25 문민정부 출범 (timelineData id: 21)
    quote: "국가는 단순히 생존이 아니라 좋은 삶을 위해 존재한다.",
    author: "마르쿠스 툴리우스 키케로 (Marcus Tullius Cicero, BC 106~BC 43)",
    authorDesc: "로마 정치인",
    authorInfo: [
      "BC 106~BC 43",
      "로마 공화국 정치가",
      "고대 로마 최고의 웅변가",
      "철학자이자 변호사"
    ],
    images: [
      "/images/cicero-1.jpg",
      "/images/cicero-2.jpg",
      "/images/good-life-1.jpg",
      "/images/good-life-2.jpg",
      "/images/civilian-government-1.jpg",
      "/images/civilian-government-2.jpg",
      "/images/quote-bg-72.jpg",
      "/images/quote-bg-73.jpg"
    ]
  },

  // 1988년
  {
    eventId: 22, // 1988.09.17 서울올림픽 (timelineData id: 22)
    quote: "진정한 발견의 여정은 새로운 풍경을 찾는 것이 아니라, 새로운 눈으로 보는 데 있다",
    author: "마르셀 프루스트 (PMarcel Proust, 1871~1922)",
    authorDesc: "프랑스 작가, 《잃어버린 시간을 찾아서》저자 ",
    authorInfo: [
      "1863~1937",
      "프랑스 교육가",
      "국제올림픽위원회 창립자",
      "올림픽 정신 확립"
    ],
    images: [
      "/images/coubertin-1.jpg",
      "/images/coubertin-2.jpg",
      "/images/seoul-olympics-1.jpg",
      "/images/seoul-olympics-2.jpg",
      "/images/olympic-spirit-1.jpg",
      "/images/olympic-spirit-2.jpg",
      "/images/quote-bg-26.jpg",
      "/images/quote-bg-27.jpg"
    ]
  },

  // 1987년
  {
    eventId: 23, // 1987.06.10 6월 민주항쟁 (timelineData id: 23)
    quote: "자유는 국가나 지도자로부터 받은 선물이 아니라, 각자의 노력과 모두의 연대로 매일 쟁취해야 하는 소유물이다",
    author: "아베르 카뮈 (Albert Camus, 1913~1960)",
    authorDesc: "프랑스의 피에누아르 작가, 철학자",
    authorInfo: [
      "1743~1826",
      "미국 제3대 대통령",
      "독립선언서 기초자",
      "민주주의 철학자"
    ],
    images: [
      "/images/jefferson-1.jpg",
      "/images/jefferson-2.jpg",
      "/images/june-struggle-1.jpg",
      "/images/june-struggle-2.jpg",
      "/images/freedom-price-1.jpg",
      "/images/freedom-price-2.jpg",
      "/images/quote-bg-28.jpg",
      "/images/quote-bg-29.jpg"
    ]
  },

  // 1980년
  {
    eventId: 24, // 1980.05.18 5.18 광주민주화운동 (timelineData id: 24)
    quote: "폭군과 군주의 차이는, 군주는 법을 따르고 백성을 법에 따라 다스리며, 자신을 그들의 하인으로 여긴다는 점이다.",
    author: "존 솔즈베리 (John of Salisbury, 1110~1180)",
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
  },

  // 1979년
  {
    eventId: 25, // 1979.12.12 12.12 군사반란 (timelineData id: 25)
    quote: "정의가 제거되면, 왕국이란 무엇이겠는가? 단지 큰 도적떼일 뿐이다. 도적떼란 무엇인가? 작은 왕국이다.",
    author: "아우구스티누스 (Augustine, AD 354~AD 430)",
    authorDesc: "4세기 신학자",
    authorInfo: [
      "AD 354~AD 430",
      "기독교 신학자",
      "『신국론』 저자",
      "교부철학의 대표자"
    ],
    images: [
      "/images/augustine-1.jpg",
      "/images/augustine-2.jpg",
      "/images/justice-kingdom-1.jpg",
      "/images/justice-kingdom-2.jpg",
      "/images/military-coup-1212-1.jpg",
      "/images/military-coup-1212-2.jpg",
      "/images/quote-bg-86.jpg",
      "/images/quote-bg-87.jpg"
    ]
  },
  {
    eventId: 26, // 1979.10.26 박정희 대통령 암살 (timelineData id: 26)
    quote: "나는 폭력을 반대한다. 왜냐하면 폭력이 선을 행한듯 보일때, 그 선은 일시적일 뿐이고, 그것이 행하는 악은 영원하기 때문이다.",
    author: "마하트마 간디 (Mahatma Gandhi, 1869~1948)",
    authorDesc: "인도 독립운동가",
    authorInfo: [
      "1869~1948",
      "인도 독립운동가",
      "비폭력 저항 운동 창시자",
      "인도 독립의 아버지"
    ],
    images: [
      "/images/mahatma-gandhi-1.jpg",
      "/images/mahatma-gandhi-2.jpg",
      "/images/nonviolence-1.jpg",
      "/images/nonviolence-2.jpg",
      "/images/political-assassination-1.jpg",
      "/images/political-assassination-2.jpg",
      "/images/quote-bg-84.jpg",
      "/images/quote-bg-85.jpg"
    ]
  },

  // 1972년
  {
    eventId: 27, // 1972.10.17 유신헌법 발표 (timelineData id: 27)
    quote: "권력은 부패하기 쉽고, 절대 권력은 절대적으로 부패한다.",
    author: "존 액턴 (Lord Acton, 1834~1902)",
    authorDesc: "영국 역사학자",
    authorInfo: [
      "1834~1902",
      "영국 역사학자",
      "케임브리지 대학교 교수",
      "권력 분산론 주창"
    ],
    images: [
      "/images/lord-acton-1.jpg",
      "/images/lord-acton-2.jpg",
      "/images/absolute-power-1.jpg",
      "/images/absolute-power-2.jpg",
      "/images/yushin-constitution-1.jpg",
      "/images/yushin-constitution-2.jpg",
      "/images/quote-bg-82.jpg",
      "/images/quote-bg-83.jpg"
    ]
  },

  // 1970년
  {
    eventId: 28, // 1970.11.13 전태일 분신 (timelineData id: 28)
    quote: "자본은 죽은 노동이다. 그것은 살아 있는 노동을 빨아먹으면서만 살아간다. 그리고 더 많이 노동을 빨아먹을수록 더 많이 산다",
    author: "카를 마르크스 (Karl Marx, 1818~1883)",
    authorDesc: "독일의 경제학자·정치학자",
    authorInfo: [
      "1948~1970",
      "한국 노동운동의 상징",
      "근로기준법 준수 요구",
      "청년 노동운동가"
    ],
    images: [
      "/images/jeon-taeil-1.jpg",
      "/images/jeon-taeil-2.jpg",
      "/images/labor-rights-1.jpg",
      "/images/labor-rights-2.jpg",
      "/images/sacrifice-1.jpg",
      "/images/sacrifice-2.jpg",
      "/images/quote-bg-18.jpg",
      "/images/quote-bg-19.jpg"
    ]
  },

  // 1968년
  {
    eventId: 29, // 1968.01.21 김신조 청와대 습격 사건 (timelineData id: 29)
    quote: "국가 권력이 국민을 길들이는 방법은 두 가지가 있다. 겁을 주거나, 기를 죽이거나.",
    author: "마이클 무어 (Michael Moore, 1954~)",
    authorDesc: "미국의 다큐멘터리 감독",
    authorInfo: [
      "1954년 출생",
      "미국 다큐멘터리 감독",
      "『화씨 9/11』 감독",
      "사회비판 다큐멘터리 전문"
    ],
    images: [
      "/images/michael-moore-1.jpg",
      "/images/michael-moore-2.jpg",
      "/images/state-power-1.jpg",
      "/images/state-power-2.jpg",
      "/images/blue-house-raid-1.jpg",
      "/images/blue-house-raid-2.jpg",
      "/images/quote-bg-80.jpg",
      "/images/quote-bg-81.jpg"
    ]
  },

  // 1965년
  {
    eventId: 30, // 1965.06.22 한일협정 체결 (timelineData id: 30)
    quote: "우리가 과거의 좋은 것을 단순히 우리의 유산이라고 부르고, 나쁜 것을 단지 시간 자체가 망각 속에 묻어버릴 죽은 짐이라고 생각할 여유가 없다.",
    author: "한나 아렌트 (Hannah Arendt, 1906~1975)",
    authorDesc: "정치 이론가, 철학자",
    authorInfo: [
      "1906~1975",
      "독일계 미국 정치이론가",
      "『전체주의의 기원』 저자",
      "현대 정치철학의 거장"
    ],
    images: [
      "/images/hannah-arendt-1.jpg",
      "/images/hannah-arendt-2.jpg",
      "/images/past-heritage-1.jpg",
      "/images/past-heritage-2.jpg",
      "/images/korea-japan-treaty-1.jpg",
      "/images/korea-japan-treaty-2.jpg",
      "/images/quote-bg-78.jpg",
      "/images/quote-bg-79.jpg"
    ]
  },

  // 1961년
  {
    eventId: 31, // 1961.05.16 5.16 군사정변 (timelineData id: 31)
    quote: "힘 없는 정의는 무능이고, 정의 없는 힘은 폭력이다.",
    author: "파스칼 (Blaise Pascal, 1623~1662)",
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

  // 1960년
  {
    eventId: 32, // 1960.04.19 4.19 혁명 (timelineData id: 32)
    quote: "먹으로 쓴 거짓말은 결코 피로 쓴 사실을 덮을 수 없다",
    author: "루쉰 (Lu Xun, 1881~1936)",
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

  // 1953년
  {
    eventId: 33, // 1953.07.27 휴전협정 (timelineData id: 33)
    quote: "오직 죽은 자만이 전쟁의 끝을 보았다.",
    author: "플라톤 (Plato, BC 427~BC 348)",
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

  // 1950년
  {
    eventId: 34, // 1950.06.25 한국전쟁 (timelineData id: 34)
    quote: "전쟁은 다른 수단에 의한 정치의 단순한 연속이다.",
    author: "카를 폰 클라우제비츠 (Carl von Clausewitz, 1780~1831)",
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

  // 1948년
  {
    eventId: 35, // 1948.08.15 대한민국 정부 수립 (timelineData id: 35)
    quote: "주권은 일반 의지의 행사이며, 그것은 결코 양도될 수 없다",
    author: "장자크 루소 (Jean-Jacques Rousseau, 1712~1778)",
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
    eventId: 36, // 1948.04.03 제주 4.3 사건 (timelineData id: 36)
    quote: "어디에서든 불의가 존재한다면, 그것은 모든 곳의 정의에 대한 위협이다.",
    author: "마틀 루터 킹 주니어 (Martin Luther King Jr., 1929~1968)",
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

  // 1945년
  {
    eventId: 37, // 1945.08.15 광복 (timelineData id: 37)
    quote: "네 소원이 무엇이냐 하고 하느님이 내게 물으시면, 나는 서슴지 않고 '내 소원은 대한 독립이오.'하고 대답할 것이오.",
    author: "김구 (Kim Gu, 1876~1949)",
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