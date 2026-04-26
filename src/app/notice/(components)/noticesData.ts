// 공지사항 정적 데이터.
// TODO(Step 4): BE의 GET /notices, GET /notices/:id 응답으로 교체.

export interface NoticeSummary {
  id: number;
  title: string;
  date: string; // YYYY.MM.DD
}

export interface NoticeDetail extends NoticeSummary {
  content: string;
}

export const notices: NoticeSummary[] = [
  { id: 1, title: "서비스 오픈 안내", date: "2023.12.25" },
  { id: 2, title: "12월 업데이트 내역", date: "2023.12.10" },
  { id: 3, title: "사이트 점검 안내", date: "2023.11.20" },
];

const detailMap: Record<number, string> = {
  1: "Hearing 서비스가 정식으로 오픈되었습니다. 이용해 주셔서 감사합니다.",
  2: "12월 정기 업데이트 내역은 업데이트 페이지에서 확인하실 수 있습니다.",
  3: "안정적인 서비스 제공을 위해 사이트 점검이 진행될 예정입니다.",
};

export function getNoticeById(id: number): NoticeDetail | null {
  const summary = notices.find((n) => n.id === id);
  if (!summary) return null;
  return {
    ...summary,
    content: detailMap[id] ?? "상세 내용은 백엔드 연동 후 제공됩니다.",
  };
}
