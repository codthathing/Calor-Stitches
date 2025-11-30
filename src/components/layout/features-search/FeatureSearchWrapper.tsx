"use client";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function FeatureSearchWrapper({ children }: { children: ReactNode }) {
  const { setSearch } = useNavigateContext();
  const { presentScroll } = useSectionScroll();

  useEffect(() => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;

    bodyElement.style.overflowY = "hidden";
    return () => {
      bodyElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <section ref={presentScroll} id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack">
        <FaTimes onClick={() => setSearch(false)} className="navBackIcon" />
      </div>
      {children}
    </section>
  );
}
