"use client";

import Navigation from '../components/Navigation';

// 업데이트 더미 데이터
const updates = [
  { version: "1.2.0", date: "2023.12.15", changes: ["타임라인 기능 개선", "버그 수정"] },
  { version: "1.1.0", date: "2023.11.30", changes: ["검색 기능 추가", "UI/UX 개선"] },
  { version: "1.0.0", date: "2023.11.01", changes: ["서비스 최초 출시"] },
];

export default function UpdatesPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="p-10">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h1 className="text-3xl font-bold mb-6">업데이트 내역</h1>
        <div className="space-y-6">
          {updates.map((update) => (
            <div key={update.version} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">v{update.version}</h2>
                <span className="text-gray-500">{update.date}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {update.changes.map((change, idx) => (
                  <li key={idx}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 