import React from 'react';
import { getQuoteByEventId, defaultQuote } from './quoteData';

interface QuotePageProps {
  eventId: number;
  images?: string[];
}

// 상세 페이지 3페이지

export default function QuotePage({ eventId, images: eventImages }: QuotePageProps) {
  const quoteData = getQuoteByEventId(eventId) || defaultQuote;
  const { quote, author, authorDesc, authorInfo } = quoteData;
  // event 실제 이미지 우선, 없으면 placeholder
  const img0 = eventImages?.[0] ?? "/img/default-placeholder.svg";
  const img1 = eventImages?.[1] ?? "/img/default-placeholder.svg";

  return (
    <div className="w-full">
      <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 sm:mb-12 md:mb-20 text-left">
        &quot; {quote} &quot;
      </blockquote>
      <div className="mt-12 sm:mt-16 md:mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          {author}
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-16 sm:mb-20 md:mb-24">{authorDesc}</p>
        
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-8">
            <div className="flex-1 order-1 md:order-none">
              <h3 className="font-medium mb-4 text-lg">저작권 표시</h3>
              <ul className="list-disc ml-6 sm:ml-8">
                {authorInfo.map((info, index) => (
                  <li key={index} className="text-base sm:text-lg md:text-xl">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1 w-full max-w-md order-2 md:order-none">
              <div className="bg-gray-light aspect-square overflow-hidden w-full sm:w-42 h-48 sm:h-52">
                <img
                  src={img0}
                  alt="참고 이미지 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-light aspect-square overflow-hidden w-full sm:w-42 h-48 sm:h-52">
                <img
                  src={img1}
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