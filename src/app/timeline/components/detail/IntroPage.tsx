import React from 'react';

interface IntroPageProps {
  title: string;
  content: string;
  content2: string;
  images: string[];
}

// 상세 페이지의 1페이지
 
export default function IntroPage({ title, content, content2, images }: IntroPageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-screen-2xl mx-auto">
      <div>
        <h1 className="text-4xl lg:text-7xl font-bold mb-6">{title}</h1>
        <p className="text-base lg:text-xl mb-8">{content}</p>
        <p className="text-base lg:text-xl mb-8">{content2}</p>
      </div>
      <div className="space-y-6">
        <div className="bg-gray-light aspect-video flex items-center justify-center overflow-hidden">
          <img
            src={images[1] || '/placeholder.jpg'}
            alt={`${title} 관련 이미지 1`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-light aspect-video flex items-center justify-center overflow-hidden">
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