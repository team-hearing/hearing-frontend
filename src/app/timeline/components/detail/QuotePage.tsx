import React from 'react';

interface QuotePageProps {
  author: string;
  authorDesc: string;
  authorInfo: string[];
  images: string[];
}

// 상세 페이지 3페이지


export default function QuotePage({ author, authorDesc, authorInfo, images }: QuotePageProps) {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
      <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 sm:mb-12 md:mb-20 px-4 sm:px-6 text-left">
        " 역사는 과거와 현재의 끊임없는 대화이다. "
      </blockquote>
      <div className="mt-12 sm:mt-16 md:mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          {author}
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-16 sm:mb-20 md:mb-24">{authorDesc}</p>
        
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8">
            <div className="flex-1 order-1 lg:order-none px-2">
              <h3 className="font-medium mb-4 text-lg">저작권 표시</h3>
              <ul className="list-disc ml-6 sm:ml-8">
                {authorInfo.map((info, index) => (
                  <li key={index} className="text-base sm:text-lg md:text-xl">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 flex-1 w-full max-w-md order-2 lg:order-none">
              <div className="bg-gray-light aspect-square overflow-hidden w-full sm:w-42 h-48 sm:h-52">
                <img
                  src={images[6] || '/placeholder.jpg'}
                  alt="참고 이미지 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-light aspect-square overflow-hidden w-full sm:w-42 h-48 sm:h-52">
                <img
                  src={images[7] || '/placeholder.jpg'}
                  alt="참고 이미지 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 