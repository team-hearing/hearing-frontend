"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function IntroScreen() {
  const [showCursor, setShowCursor] = useState(true)
  const [typedText, setTypedText] = useState("")
  const [showHearing, setShowHearing] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  const fullText = "히링(HEARING)"

  // 커서 깜박임 효과
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    // 3초 후에 타이핑 시작
    const hearingTimeout = setTimeout(() => {
      setShowHearing(true)
    }, 3000)

    return () => {
      clearInterval(cursorInterval)
      clearTimeout(hearingTimeout)
    }
  }, [])

  // 타이핑 효과
  useEffect(() => {
    if (!showHearing) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTypingComplete(true)
      }
    }, 150) // 타이핑 속도 조절

    return () => clearInterval(typingInterval)
  }, [showHearing])

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-full text-center">
      <div className="flex flex-col items-center justify-center space-y-16 md:space-y-20 mb-16">
        <motion.h1
          className="font-kr text-6xl md:text-7xl lg:text-9xl xl:text-[170px] font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          역사를 듣다<span className="text-black">.</span>
        </motion.h1>

        <div className="w-full flex flex-col items-center justify-center">
          <AnimatePresence>
            {showHearing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 h-16 flex items-center justify-center"
              >
                <h2 className="text-4xl md:text-5xl font-medium text-colors-primary" style={{ color: '#00B493' }}>
                  {typedText}
                  {!typingComplete && showCursor && (
                    <span className="inline-block w-1 h-10 bg-primary ml-1"></span>
                  )}
                </h2>
              </motion.div>
            ) : (
              <div className="h-16 mb-4 flex items-center justify-center">
                {showCursor && <div className="h-10 w-1 bg-black animate-pulse"></div>}
              </div>
            )}
          </AnimatePresence>
            
          {/* 히링 아래 밑줄 */}
          {showHearing && (
            <div className="relative w-full max-w-xs mx-auto">
              <div className="h-0.5 bg-black w-full"></div>
              <div className="absolute right-0 -top-2 w-4 h-4 bg-black rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

