"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showHearing, setShowHearing] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "히링(HEARING)";

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
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [showHearing]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-6">
      {/* '역사를 듣다.' 텍스트 */}
      <motion.h1
        className="font-kr text-h1 sm:text-h2 md:text-h1 lg:text-display font-bold text-black tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        역사를 듣다.
      </motion.h1>

      {/* '히링(HEARING)' 타이핑 영역 */}
      <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto text-center">
        
        {/* (히링 타이핑 전) 커서 깜빡임 */}
        {!showHearing && showCursor && (
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 h-6 sm:h-8 md:h-10 lg:h-12 w-1 bg-gray-dark animate-blink"></div>
        )}

        {/* (히링 타이핑 시작 후) 위쪽에 텍스트 타이핑 및 커서 */}
        {showHearing && (
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -top-8 sm:-top-10 md:-top-12 text-h3 sm:text-h2 md:text-h1 lg:text-display font-medium text-primary whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center justify-center">
              {typedText}
              {!typingComplete && showCursor && (
                <span className="inline-block w-1 h-4 sm:h-6 md:h-8 lg:h-10 bg-primary ml-1 animate-blink"></span>
              )}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
