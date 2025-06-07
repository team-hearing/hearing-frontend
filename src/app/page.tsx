"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function LottieIntroPage() {
  const [lottieData, setLottieData] = useState<any>(null);

  // Lottie JSON 파일 로드
  useEffect(() => {
    const loadLottieAnimation = async () => {
      const response = await fetch('/animations/hearing.json');
      const animationData = await response.json();
      setLottieData(animationData);
    };

    loadLottieAnimation();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {lottieData && (
        <Lottie
          animationData={lottieData}
          loop={false}
          autoplay={true}
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
    </div>
  );
}

  
