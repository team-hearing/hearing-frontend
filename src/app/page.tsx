"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";

export default function LottieIntroPage() {
  const [lottieData, setLottieData] = useState<any>(null);
  const [isWhiteFading, setIsWhiteFading] = useState(false);
  const router = useRouter();

  // Lottie JSON 파일 로드
  useEffect(() => {
    const loadLottieAnimation = async () => {
      const response = await fetch('/animations/hearing.json');
      const animationData = await response.json();
      setLottieData(animationData);
    };

    loadLottieAnimation();
  }, []);

  // 페이드 인
  const handleAnimationComplete = () => {
    setIsWhiteFading(true);
  };

  //타임라인 페이지 이동
  useEffect(() => {
    if (isWhiteFading) {
      const timer = setTimeout(() => {
        router.push('/timeline');
      }, 500); // 

      return () => clearTimeout(timer);
    }
  }, [isWhiteFading, router]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {lottieData && (
        <Lottie
          animationData={lottieData}
          loop={false}
          autoplay={true}
          onComplete={handleAnimationComplete}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid meet'
          }}
          style={{ 
            width: '100vw', 
            height: '100vh',
            fontFamily: 'Noto Sans KR, Open Sans, sans-serif',
            fontWeight: '500'
          }}
          className="lottie-animation"
        />
      )}
      
      {/* 페이드인 효과과 */}
      {isWhiteFading && (
        <div 
          className="absolute inset-0 bg-white transition-opacity duration-1200 ease-out"
          style={{
            opacity: isWhiteFading ? 1 : 0,
            zIndex: 60
          }}
        />
      )}
    </div>
  );
}

  
