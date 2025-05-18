"use client";

import Navigation from '../../components/Navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NoticeDetailPage() {
  const params = useParams();
  const id = params.id;

  // 실제 데이터베이스에서 가져오거나 API 호출로 대체해야 합니다
  const noticeData = {
    id,
    title: `공지사항 제목 #${id}`,
    date: "2023.12.25",
    content: `이것은 공지사항 #${id}의 상세 내용입니다. 실제 데이터는 서버에서 가져와야 합니다.`
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full">
        <Navigation />
      </div>
      
      <div className="p-10">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <div className="mb-4">
          <Link href="/notice" className="text-primary hover:underline">
            ← 목록으로
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-1">{noticeData.title}</h1>
        <p className="text-gray-500 mb-6">{noticeData.date}</p>
        <div className="border-t border-b py-6">
          <p>{noticeData.content}</p>
        </div>
      </div>
    </div>
  );
} 