"use client";

import Navigation from '../../(components)/Navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { ArrowLeft } from "lucide-react";
import { getNoticeById } from '../(components)/noticesData';

export default function NoticeDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  // TODO(Step 4): BE GET /notices/:id로 교체
  const noticeData = getNoticeById(id);
  if (!noticeData) notFound();

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="px-8 py-8 sm:px-10 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16">
        <div className="w-full h-px bg-gray-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12" />
        
        <div className="max-w-4xl lg:max-w-none">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <Link href="/notice" className="text-primary hover:underline flex items-center gap-1 sm:gap-2 md:gap-3 text-sm sm:text-body md:text-h6">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> 
              <span>뒤로가기</span>
            </Link>
          </div>
          
          <h1 className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-bold mb-2 sm:mb-3 md:mb-4">{noticeData.title}</h1>
          <p className="text-sm sm:text-body text-gray-500 mb-6 sm:mb-8 md:mb-10 lg:mb-12">{noticeData.date}</p>
          
          <div className="border-t border-b py-6 sm:py-8 md:py-10 lg:py-12">
            <p className="text-sm sm:text-body leading-relaxed sm:leading-relaxed md:leading-loose">{noticeData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 