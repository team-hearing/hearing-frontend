import React from 'react';

interface IntroPageProps {
  title: string;
  content: string;
  content2: string;
  images: string[];
}

// 상세 페이지의 1페이지 — 요약(content)만 표시
export default function IntroPage({ title, content, images }: IntroPageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6">{title}</h1>
        {/* 요약: 1~2문장, 반응형 line-clamp */}
        <p className="text-sm sm:text-base lg:text-xl leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-6 lg:line-clamp-8 mb-4 sm:mb-6 md:mb-8">
          {content}
        </p>
      </div>
      <div className="space-y-3 sm:space-y-4 md:space-y-6">

        <div className="bg-gray-light aspect-[4/3] md:aspect-video flex items-center justify-center">

          <img
            src={images[1] || '/placeholder.jpg'}
            alt={`${title} 관련 이미지 1`}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-gray-light aspect-[4/3] md:aspect-video flex items-center justify-center">

          <img
            src={images[2] || '/placeholder.jpg'}
            alt={`${title} 관련 이미지 2`}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
} 