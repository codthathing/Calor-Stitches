"use client";
import { useEffect, RefObject } from "react";
import { usePathname } from "next/navigation";

const MODAL_SEGMENTS = ["/auth", "/user", "/product-preview"];

export const useScrollTrap = (sectionRef: RefObject<HTMLElement | null>, innerScrollRef: RefObject<HTMLElement | null>) => {
  const pathname = usePathname();

  useEffect(() => {
    const modalOpen = MODAL_SEGMENTS.some(seg =>
      pathname.startsWith(seg)
    );

    if (modalOpen) return;

    const isSectionInView = () => {
      const section = sectionRef.current;
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleWheel = (e: WheelEvent) => {
      const inner = innerScrollRef.current;
      if (!inner || !isSectionInView()) return;

      const { scrollTop, scrollHeight, clientHeight } = inner;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if ((scrollingDown && !atBottom) || (scrollingUp && !atTop)) {
        e.preventDefault();
        inner.scrollTop += e.deltaY;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const inner = innerScrollRef.current;
      if (!inner || !isSectionInView()) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      const { scrollTop, scrollHeight, clientHeight } = inner;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      if ((scrollingDown && !atBottom) || (scrollingUp && !atTop)) {
        e.preventDefault();
        inner.scrollTop += deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [pathname, sectionRef, innerScrollRef]);
};
