"use client";
import { useEffect, RefObject } from "react";

export const useLockBodyScroll = (allowScrollRef?: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const isInsideAllowedArea = (target: EventTarget | null) => {
      if (!allowScrollRef?.current || !(target instanceof Node)) return false;
      return allowScrollRef.current.contains(target);
    };

    const preventScroll = (e: Event) => {
      if (isInsideAllowedArea(e.target)) return;
      e.preventDefault();
    };

    const preventKeyScroll = (e: KeyboardEvent) => {
      const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
      if (!scrollKeys.includes(e.key)) return;
      if (isInsideAllowedArea(e.target)) return;
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
    };
  }, [allowScrollRef]);
};
