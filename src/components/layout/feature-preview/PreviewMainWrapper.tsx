"use client";
// import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

export default function ViewMainWrapper({ children }: { children: ReactNode }) {
  // const { presentScroll } = useSectionScroll();
  const router = useRouter();

  return (
    <main id="productViewMain">
      <div id="productViewBack">
        <FaTimes onClick={() => {
          router.back();
          router.refresh();
        }} id="productViewBackIcon" />
      </div>
      <main id="productViewInnerMain" /* ref={presentScroll} */>
        {children}
      </main>
    </main>
  );
}
