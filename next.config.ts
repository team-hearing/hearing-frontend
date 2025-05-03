import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // nextjs의 이미지최적화 기능
  images: {
    domains: ['your-java-api-server.com'],  // Java API 서버 도메인 추가
  },
};

export default nextConfig;
