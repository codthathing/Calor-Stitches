"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MODAL_SEGMENTS = ["/auth", "/user", "/product-preview"];

export default function PagePathTracker() {
  const pathname = usePathname();
  const isModalPath = MODAL_SEGMENTS.some(seg => pathname.startsWith(seg));

  useEffect(() => {
    if (isModalPath) return;
    document.cookie = `previousPath=${encodeURIComponent(pathname)}; path=/`;
    document.cookie = `navigatedInternally=true; path=/`;
  }, [pathname, isModalPath]);

  return null;
}