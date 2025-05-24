"use client";

import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="p-10">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h1 className="text-h2 font-bold mb-6">About HEARING</h1>
        
        <p className="text-h5 font-semibold mb-10">
          HEARING은 한국과 세계의 근현대사를 비교하며 탐색할 수 있는 웹 애플리케이션입니다.
        </p>
        
        <p className="text-body mb-4">
          '역사를 듣는다'라는 의미에서 출발한 히링은 특정 시대나 사건을 선택하면 같은 시기의 한국과 세계에서 일어난 주요 사건을 직관적으로 비교할 수 있도록 설계되었습니다.  
        </p>
        
      
        
      <div className="mt-8">
         <div className="aspect-video overflow-hidden rounded-lg shadow-sm">  
           <img src="https://images.unsplash.com/photo-hipcPLJE4uk?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"   
            className="object-cover w-full h-full" />           
            </div>         
          </div>
      </div>
    </div>
  );
} 