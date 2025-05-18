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
      
      <div className="p-10">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h1 className="text-3xl font-bold mb-6">공지사항</h1>
        <div className="border rounded-lg divide-y">
          {notices.map((notice) => (
            <div key={notice.id} className="p-4 hover:bg-gray-50">
              <Link href={`/notice/${notice.id}`}>
                <div>
                  <h2 className="text-xl font-medium">{notice.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{notice.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 