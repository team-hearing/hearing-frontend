// 업데이트 내역 정적 데이터.
// TODO(Step 4): BE의 GET /updates 응답으로 교체.

export interface UpdateEntry {
  version: string;
  date: string; // YYYY.MM.DD
  changes: string[];
}

export const updates: UpdateEntry[] = [
  { version: "1.2.0", date: "2023.12.15", changes: ["타임라인 기능 개선", "버그 수정"] },
  { version: "1.1.0", date: "2023.11.30", changes: ["검색 기능 추가", "UI/UX 개선"] },
  { version: "1.0.0", date: "2023.11.01", changes: ["서비스 최초 출시"] },
];
