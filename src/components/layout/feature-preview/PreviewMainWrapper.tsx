"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

export default function ViewMainWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <main id="productViewMain">
      <div id="productViewBack">
        <FaTimes id="productViewBackIcon" onClick={() => router.back()}/>
      </div>
      <main id="productViewInnerMain">{children}</main>
    </main>
  );
}
