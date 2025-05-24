"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showHearing, setShowHearing] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "히링(HEARING)";
  const router = useRouter();

  useEffect(() => {
    // 커서 깜빡임
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    // 3초 후 히링 타이핑 시작
    const hearingTimeout = setTimeout(() => {
      setShowHearing(true);
    }, 3000);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(hearingTimeout);
    };
  }, []);

  useEffect(() => {
    if (!showHearing) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);

        // 타이핑 완료 후 
        setTimeout(() => {
          router.push("/timeline");
        }, 2000); 
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [showHearing, router]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen gap-6 bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 페이드 아웃 효과 추가
      transition={{ duration: 1 }} // 자연스러운 페이드 아웃
    >
      <AnimatePresence>
        <motion.h1
          className="font-kr text-h1 font-bold text-black tracking-tight"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // 페이드 아웃 효과
          transition={{ duration: 1 }}
        >
          역사를 듣다.
        </motion.h1>
      </AnimatePresence>

      {/* '히링(HEARING)' 타이핑 영역 */}
      <div className="relative mt-6 w-full max-w-xs mx-auto text-center">
        {/* (히링 타이핑 전) 커서 깜빡임 */}
        {!showHearing && showCursor && (
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 h-10 w-1 bg-gray-medium animate-blink"></div>
        )}

        {/* (히링 타이핑 시작 후) 위쪽에 텍스트 타이핑 및 커서 */}
        {showHearing && (
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -top-10 text-h2 font-medium text-secondary whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center justify-center">
              {typedText}
              {!typingComplete && showCursor && (
                <span className="inline-block w-1 h-8 bg-primary ml-1 animate-blink"></span>
              )}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
