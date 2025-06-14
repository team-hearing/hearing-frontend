"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  // 비디오 재생 완료 후 페이드 아웃 및 페이지 이동
  const handleVideoEnded = () => {
    setIsFading(true);
    setTimeout(() => {
      router.push('/timeline');
    }, 100); // 0.1초 페이드 아웃 후 이동
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ease-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

  
