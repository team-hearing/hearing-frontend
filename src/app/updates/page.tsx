"use client";

import Navigation from '../(components)/Navigation';

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
      
      <div className="px-8 py-8 sm:px-10 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16">
        <div className="w-full h-px bg-gray-dark mb-6 sm:mb-8 md:mb-10 lg:mb-12" />
        
        <div className="max-w-4xl lg:max-w-none">
          <div className="text-h5 sm:text-h4 md:text-h3 font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">업데이트 내역</div>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {updates.map((update) => (
              <div key={update.version} className="border rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 md:mb-5 gap-2 sm:gap-0">
                  <div className="text-body sm:text-h6 md:text-h5 font-medium">v{update.version}</div>
                  <span className="text-sm sm:text-body text-gray-medium">{update.date}</span>
                </div>
                <ul className="list-disc pl-4 sm:pl-5 md:pl-6 space-y-1 sm:space-y-2">
                  {update.changes.map((change, idx) => (
                    <li key={idx} className="text-sm sm:text-body leading-relaxed">{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 