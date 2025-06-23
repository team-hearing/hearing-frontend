// app/timeline/[id]/page.tsx
"use client";
import { notFound } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { use } from "react";
import { timelineData } from "../components/timelineData";

// 컴포넌트 임포트
import CloseButton from "../components/detail/CloseButton";
import IntroPage from "../components/detail/IntroPage";
import GalleryPage from "../components/detail/GalleryPage";
import QuotePage from "../components/detail/QuotePage";
import useHorizontalWheel from "../hooks/useHorizontalWheel";

export default function DetailPage({ params }: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = use(params);
  const post = {
    id: Number(resolvedParams.id),
    title: "Head",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "말한 사람",
    authorDesc: "짧은 설명",
    authorInfo: ["00기관", "00기관"],
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 수평 휠 스크롤 커스텀 훅 사용
  useHorizontalWheel(scrollContainerRef);

  if (!post) {
    notFound();
  }

  return (

    <div className="h-screen bg-white relative">

      {/* 닫기 버튼 */}
      <CloseButton />

      {/* 수평 스크롤 컨테이너 */}
      <div
        ref={scrollContainerRef}

        className="absolute inset-0 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
      >
        {/* 1 페이지 */}
        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">

          <IntroPage 
            title={post.title}
            content={post.content}
            content2={post.content2}
            images={post.images}
          />
        </div>
       
        {/* 2 페이지 */}

        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">

          <GalleryPage 
            content={post.content2}
            images={post.images}
          />
        </div>

        {/* 3 페이지 */}

        <div className="min-w-full w-screen min-h-full snap-start overflow-y-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-8 max-w-screen-2xl mx-auto">

          <QuotePage eventId={post.id} />
        </div>
      </div>
    </div>
  );
}