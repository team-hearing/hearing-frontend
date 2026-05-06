"use client";

import Navigation from '../(components)/Navigation';
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
            HEARING: 역사를 듣고 기억하고, 배우다.
          </p>
          
          <div className="text-sm sm:text-body leading-relaxed sm:leading-relaxed md:leading-loose pr-0 sm:pr-4 md:pr-8 lg:pr-16 space-y-6">
            <p>
              2024년 12월 03일, 그날은 대한민국 국민들에게 깊은 충격과 질문을 남겼습니다. 그리고 <b>&apos;Hearing&apos;</b>은 잊혀져가는 수많은 사건들을 떠올렸습니다. 앞으로 우리가 살아가면서 마주할 역사적 순간들을 어떻게 기억하고 기록해야할지에 대해 고민을 시작하게 되었고, 그 고민에서 웹앱 에플리케이션인 <b>&apos;Hearing&apos;</b>이 탄생하게 되었습니다.
            </p>
            <p>
             <b>&apos;Hearing&apos;</b>은 단순히 과거를 나열하는 것을 넘어, &apos;역사를 듣는다&apos;는 의미를 담고 있습니다. 특정 시대의 사건을 선택하면, 사건을 직관적으로 탐색할 수 있도록 설계했습니다. 또한 그 시기에 세계에서 일어난 주요 사건들도 알 수 있도록 설계되었습니다.
              <br />잊혀져가는 한국의 역사를 다시 기억하고, 세계사의 흐름 속에서 우리의 위치를 이해하며, 앞으로 만들어갈 역사에 대한 깊이있는 통찰을 얻는것, 이것이 <b>&apos;Hearing&apos;</b>이 추구하는 가치입니다.
            </p>
            <p>
              <b>&apos;Hearing&apos;</b>를 통해 우리는 과거를 기억하고, 현재를 이해하며, 더 나은 미래를 만들어갈 힘을 얻을 수 있기를 희망합니다.
              우리가 함께 기억하고 나아갈때 비로소 더 나은 삶이 펼쳐지리라 기대합니다. 
            </p>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg shadow-sm mt-8 sm:mt-10 md:mt-12 lg:mt-14">  
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