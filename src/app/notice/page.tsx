"use client";

import Navigation from '../components/Navigation';
import Link from 'next/link';

// 공지사항 더미 데이터
const notices = [
  { id: 1, title: "서비스 오픈 안내", date: "2023.12.25" },
  { id: 2, title: "12월 업데이트 내역", date: "2023.12.10" },
  { id: 3, title: "사이트 점검 안내", date: "2023.11.20" },
];

export default function NoticePage() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="px-8 py-8 sm:px-10 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16">
        <div className="w-full h-px bg-gray-dark mb-6 sm:mb-8 md:mb-10 lg:mb-12" />
        
        <div className="max-w-4xl lg:max-w-none">
          <div className="text-h5 sm:text-h4 md:text-h3 font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">공지사항</div>
          
          <div className="border rounded-lg divide-y">
            {notices.map((notice) => (
              <div key={notice.id} className="p-4 sm:p-5 md:p-6 lg:p-8 hover:bg-gray-light">
                <Link href={`/notice/${notice.id}`}>
                  <div>
                    <div className="text-body sm:text-h6 md:text-h5 font-medium">{notice.title}</div>
                    <p className="text-sm sm:text-body text-gray-medium mt-1 sm:mt-2">{notice.date}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 