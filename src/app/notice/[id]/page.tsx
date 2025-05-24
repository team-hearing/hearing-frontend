"use client";

import Navigation from '../../components/Navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from "lucide-react";

export default function NoticeDetailPage() {
  const params = useParams();
  const id = params.id;

  // 실제 데이터베이스에서 가져오거나 API 호출로 대체해야 합니다
  const noticeData = {
    id,
    title: `공지사항 제목 #${id}`,
    date: "2025.00.00",
    content: `이것은 공지사항 #${id}의 상세 내용입니다. 실제 데이터는 서버에서 가져와야 합니다.`
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="p-12">
        <div className="w-full h-px bg-gray-medium mb-6" />
        <div className="mb-4">
          <Link href="/notice" className="text-primary hover:underline flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> 뒤로가기
          </Link>
        </div>
        <div className="text-h4 font-bold mb-1">{noticeData.title}</div>
        <p className="text-gray-medium mb-6">{noticeData.date}</p>
        <div className="border-t border-b py-8">
          <p>{noticeData.content}</p>
        </div>
      </div>
    </div>
  );
} 