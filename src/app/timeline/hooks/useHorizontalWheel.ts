import { RefObject, useEffect } from "react";

// 마우스 휠을 수평 스크롤로 변환하는 커스텀 훅
export default function useHorizontalWheel(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    
      const scrollLeft = container.scrollLeft;
      const scrollSpeed = 550; // 스크롤 속도 조절 (픽셀 단위)

      // 스크롤 가능 여부 확인
      if (container.scrollWidth <= container.clientWidth) return;

      // 휠 방향에 따라 스크롤 이동
      if (e.deltaY > 0) {
        // 아래로 스크롤 (오른쪽으로 이동)
        container.scrollTo({
          left: scrollLeft + scrollSpeed,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0) {
        // 위로 스크롤 (왼쪽으로 이동)
        container.scrollTo({
          left: scrollLeft - scrollSpeed,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [containerRef]);
} 