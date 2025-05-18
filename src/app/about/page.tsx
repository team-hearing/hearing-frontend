"use client";

import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="relative w-full justify-items-start">
        <Navigation />
      </div>
      
      <div className="p-10">
        <div className="w-full h-px bg-gray-dark mb-4" />
        <h1 className="text-3xl font-bold mb-6">About HEARING</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            HEARING은 역사적 사건을 오디오와 함께 경험할 수 있는 플랫폼입니다.
          </p>
          <p className="mb-4">
            우리는 역사적 사건의 음향을 통해 과거를 더 생생하게 체험할 수 있는 
            기회를 제공합니다. 단순히 텍스트로 읽는 것이 아닌, 그 시대의 소리를
            통해 역사적 순간을 경험해보세요.
          </p>
          <p className="mb-4">
            타임라인을 통해 한국 근현대사의 주요 사건들을 살펴보고, 
            각 사건과 관련된 오디오 기록을 들어볼 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
} 