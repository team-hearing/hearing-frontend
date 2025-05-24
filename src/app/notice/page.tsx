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
      
      <div className="p-12">
        <div className="w-full h-px bg-gray-dark mb-8" />
        <div className="text-h3 font-bold mb-6">공지사항</div>
        <div className="border rounded-lg divide-y">
          {notices.map((notice) => (
            <div key={notice.id} className="p-4 hover:bg-gray-light">
              <Link href={`/notice/${notice.id}`}>
                <div>
                  <div className="text-h6 font-medium">{notice.title}</div>
                  <p className="text-gray-medium text-sm mt-1">{notice.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 