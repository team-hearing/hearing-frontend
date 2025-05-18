import { useRef, useEffect } from "react";

interface HorizontalScrollOptions {
  onScroll?: (container: HTMLDivElement) => void;
}

export default function useHorizontalScroll(options: HorizontalScrollOptions = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.clientWidth;

      if (e.deltaY > 0) {
        // 다음 페이지 스크롤 
        container.scrollTo({
          left: scrollLeft + pageWidth,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0) {
        // 이전 페이지 스크롤 
        container.scrollTo({
          left: scrollLeft - pageWidth,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = () => {
      if (options.onScroll) {
        options.onScroll(container);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [options]);

  return scrollRef;
} 