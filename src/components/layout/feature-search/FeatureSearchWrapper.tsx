"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function FeatureSearchWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;

    bodyElement.style.overflowY = "hidden";
    return () => {
      bodyElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <section id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack">
        <FaTimes onClick={() => router.back()} className="navBackIcon" />
      </div>
      {children}
    </section>
  );
}
