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
      const scrollSpeed = 550 

      if (e.deltaY > 0) {
        // 오른쪽으로 부드럽게 스크롤 
        container.scrollTo({
          left: scrollLeft + scrollSpeed,
          behavior: "smooth",
        });
      } else if (e.deltaY < 0) {
        // 왼쪽으로 부드럽게 스크롤 
        container.scrollTo({
          left: scrollLeft - scrollSpeed,
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