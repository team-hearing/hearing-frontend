import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization: allowlist external hosts that may serve copyright-free
  // historical images (Wikimedia Commons + Korean public-institution archives)
  // and the SpringBoot backend that proxies/serves images.
  images: {
    remotePatterns: [
      // Wikimedia (해외사 + 일부 한국사)
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
      // 국사편찬위원회 (한국사 이미지)
      { protocol: "https", hostname: "contents.history.go.kr" },
      // 대한민국역사박물관 (근현대사)
      { protocol: "https", hostname: "archive.much.go.kr" },
      // SpringBoot 백엔드 (개발/운영)
      { protocol: "http", hostname: "localhost", port: "8080" },
      { protocol: "http", hostname: "hearing-history.ddns.net" },
    ],
  },
};

export default nextConfig;
