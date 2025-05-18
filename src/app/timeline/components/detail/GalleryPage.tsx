import React from 'react';

interface GalleryPageProps {
  content: string;
  images: string[];
}

/**
 * 이벤트 상세 페이지의 두 번째 갤러리 페이지
 */
export default function GalleryPage({ content, images }: GalleryPageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-light aspect-square flex items-center justify-center overflow-hidden">
          <img
            src={images[3] || '/placeholder.jpg'}
            alt="갤러리 이미지 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-light aspect-square flex items-center justify-center overflow-hidden">
          <img
            src={images[4] || '/placeholder.jpg'}
            alt="갤러리 이미지 2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-light aspect-square flex items-center justify-center overflow-hidden">
          <img
            src={images[5] || '/placeholder.jpg'}
            alt="갤러리 이미지 3"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-light aspect-square flex items-center justify-center overflow-hidden">
          <img
            src={images[6] || '/placeholder.jpg'}
            alt="갤러리 이미지 4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-base md:text-xl">{content}</p>
        <p className="text-base md:text-xl">{content}</p>
      </div>
    </div>
  );
} 