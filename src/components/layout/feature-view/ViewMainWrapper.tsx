"use client";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

export default function ViewMainWrapper({ children }: { children: ReactNode }) {
  const { setView } = useNavigateContext();
  const { presentScroll } = useSectionScroll();

  return (
    <main id="productViewMain">
      <div id="productViewBack">
        <FaTimes onClick={() => setView(false)} id="productViewBackIcon" />
      </div>
      <main id="productViewInnerMain" ref={presentScroll}>
        {children}
      </main>
    </main>
  );
}
