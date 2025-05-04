// app/timeline/[id]/page.tsx
"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import { useRef, useEffect } from "react";

export default function DetailPage({ params }: { params: { id: string } }) {
  const post = {
    id: Number(params.id),
    title: "Head",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "말한 사람",
    authorDesc: "짧은 설명",
    authorInfo: ["00기관", "00기관"],
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); 

    
      const scrollLeft = container.scrollLeft;
     
      const pageWidth = container.clientWidth;

      // 휠 방향에 따라 스크롤 이동
      if (e.deltaY > 0) {
        // 아래로 스크롤 (다음 페이지)
        container.scrollTo({
          left: scrollLeft + pageWidth,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0) {
        // 위로 스크롤 (이전 페이지)
        container.scrollTo({
          left: scrollLeft - pageWidth,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 닫기 버튼 */}
      <div className="fixed top-0 right-0 md:left-0 lg:left-0 p-6 z-20">
        <Link href="/timeline" className="inline-block">
          <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white shadow-sm">
            <X size={20} />
          </div>
        </Link>
      </div>

      {/* 수평 스크롤 컨테이너 */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-screen"
      >
       {/* 1 페이지 */}
       <div className="min-w-full w-screen h-screen flex items-start snap-start px-4 md:px-16 lg:px-24 pt-20 md:pt-16 pb-8 md:pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-screen-2xl mx-auto">
    <div>
      <h1 className="text-4xl lg:text-7xl font-bold mb-6">{post.title}</h1>
      <p className="text-base lg:text-xl mb-16">{post.content}</p>
      <p className="text-base lg:text-xl mb-16">{post.content2}</p>
    </div>
    <div className="space-y-6">
      <div className="bg-gray-200 aspect-video flex items-center justify-center">
        <img
          src={post.images[0]}
          alt="Image 1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="bg-gray-200 aspect-video flex items-center justify-center">
        <img
          src={post.images[0]}
          alt="Image 2"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</div>
       
        {/* 2 페이지 */}
        <div className="min-w-full w-screen h-screen flex items-start snap-start px-4 md:px-16 lg:px-24 pt-20 md:pt-16 pb-8 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-light aspect-square flex items-center justify-center">
                <img
                  src={post.images[0]}
                  alt="Image 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-gray-light aspect-square flex items-center justify-center">
                <img
                  src={post.images[1]}
                  alt="Image 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-gray-light aspect-square flex items-center justify-center">
                <img
                  src={post.images[2]}
                  alt="Image 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-gray-light aspect-square flex items-center justify-center">
                <img
                  src={post.images[3]}
                  alt="Image 4"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-base md:text-xl">{post.content2}</p>
              <p className="text-base md:text-xl">{post.content2}</p>
            </div>
          </div>
        </div>

        {/* 3 페이지 */}
        <div className="min-w-full w-screen h-screen flex items-start snap-start px-4 md:px-16 lg:px-24 pt-20 md:pt-16 pb-8 md:pb-16">
          <div className="w-full max-w-screen-2xl mx-auto">
            <blockquote className="text-2xl md:text-4xl font-medium mb-8 md:mb-16">
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            </blockquote>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {post.author}
              </h2>
              <p className="text-base md:text-xl mb-6">{post.authorDesc}</p>
              <div className="mb-8">
                <h3 className="font-medium mb-2">저작권 표시</h3>
                <ul className="list-disc ml-6">
                  {post.authorInfo.map((info, index) => (
                    <li key={index} className="text-base md:text-xl">
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}