"use client";
import { motion } from "framer-motion";

export default function TimelinePage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen bg-white"
      initial={{ opacity: 0 }}       // 시작시 투명
      animate={{ opacity: 1 }}       // 페이드 인 애니메이션
      transition={{ duration: 1 }}   // 자연스러운 전환
    >
      <h1 className="font-kr text-h1 font-bold text-primary">타임라인 페이지</h1>
      <p className="text-body text-gray-medium">여기는 타임라인 페이지입니다.</p>
    </motion.div>
  );
}
