"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";

export default function LottieIntroPage() {
  const [lottieData, setLottieData] = useState<any>(null);
  const [loadingData, setLoadingData] = useState<any>(null);
  const [isWhiteFading, setIsWhiteFading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  // 로딩 애니메이션 로드
  useEffect(() => {
    const loadLoadingAnimation = async () => {
      const response = await fetch('/animations/loading.json');
      const animationData = await response.json();
      setLoadingData(animationData);
    };

    loadLoadingAnimation();
  }, []);

  // 화면 크기 감지 및 데스크탑 여부 확인
  useEffect(() => {
    const checkDesktop = () => {
      const isDesktopSize = window.innerWidth >= 1024; // 1024px 이상을 데스크탑으로 간주
      setIsDesktop(isDesktopSize);
      
      // 데스크탑이 아니면 바로 타임라인으로 이동
      if (!isDesktopSize) {
        setTimeout(() => {
          router.push('/timeline');
        }, 2000); // 2초 후 이동 (로딩 애니메이션 시간)
        return;
      }
    };

    // 화면 체크
    checkDesktop();

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', checkDesktop);

    return () => {
      window.removeEventListener('resize', checkDesktop);
    };
  }, [router]);

  // Lottie JSON 파일 로드 (데스크탑일 때만)
  useEffect(() => {
    if (!isDesktop) return;

    const loadLottieAnimation = async () => {
      const response = await fetch('/animations/hearing.json');
      const animationData = await response.json();
      setLottieData(animationData);
    };

    loadLottieAnimation();
  }, [isDesktop]);

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

  // 모바일 및 태블릿릿 로딩 애니메이션 표시
  if (!isDesktop) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        {loadingData ? (
          <Lottie
            animationData={loadingData}
            loop={true}
            autoplay={true}
            style={{ 
              width: '200px', 
              height: '200px' 
            }}
            className="lottie-loading"
          />
        ) : (
          <div className="text-white text-body sm:text-h6 md:text-h5 font-kr font-regular lg:hidden">Hearing...</div>
        )}
      </div>
    );
  }

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
      
      {/* 페이드인 효과 */}
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

  
