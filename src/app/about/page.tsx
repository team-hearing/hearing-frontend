"use client";

import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="px-8 py-8 sm:px-10 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16">
        <div className="w-full h-px bg-gray-dark mb-6 sm:mb-8 md:mb-10 lg:mb-12" />
        
        <div className="max-w-4xl lg:max-w-none">
          <div className="text-h5 sm:text-h4 md:text-h3 font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12">About HEARING</div>
          
          <p className="text-body sm:text-h6 font-semibold mb-8 sm:mb-10 md:mb-12 lg:mb-14 leading-relaxed sm:leading-relaxed md:leading-loose">
            HEARING은 한국과 세계의 근현대사를 비교하며 탐색할 수 있는 웹 애플리케이션입니다.
          </p>
          
          <p className="text-sm sm:text-body mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed sm:leading-relaxed md:leading-loose pr-0 sm:pr-4 md:pr-8 lg:pr-16">
            '역사를 듣는다'라는 의미에서 출발한 히링은 특정 시대나 사건을 선택하면 같은 시기의 한국과 세계에서 일어난 주요 사건을 직관적으로 비교할 수 있도록 설계되었습니다.  
          </p>
          
          <div className="aspect-video overflow-hidden rounded-lg shadow-sm mt-4 sm:mt-6 md:mt-8 lg:mt-10">  
            <Image 
              src="/img/subwayline1.jpg"
              alt="HEARING 애플리케이션 소개 이미지"
              width={1200}
              height={675}
              className="object-cover w-full h-full"
              priority
            />           
          </div>
        </div>         
      </div>
    </div>
  );
} 