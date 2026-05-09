import React from 'react';

interface GalleryPageProps {
  content: string;
  images: string[];
}

// 상세 페이지의 2페이지
 
export default function GalleryPage({ content, images }: GalleryPageProps) {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full items-start">
      {/* 이미지 영역: 데스크탑(lg)에서는 2x2, 태블릿(md)에서는 1열 스택 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gray-light aspect-video md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

          <img
            src={images[3] || '/placeholder.jpg'}
            alt="갤러리 이미지 1"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-gray-light aspect-video md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

          <img
            src={images[4] || '/placeholder.jpg'}
            alt="갤러리 이미지 2"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-gray-light aspect-video md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

          <img
            src={images[5] || '/placeholder.jpg'}
            alt="갤러리 이미지 3"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-gray-light aspect-video md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

          <img
            src={images[6] || '/placeholder.jpg'}
            alt="갤러리 이미지 4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* 텍스트 영역: 전체 본문, 반응형 line-clamp */}
      <div className="flex flex-col justify-center">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed line-clamp-[10] sm:line-clamp-[14] md:line-clamp-[18] lg:line-clamp-[22]">
          {content}
        </p>
      </div>
    </div>
  );
} 