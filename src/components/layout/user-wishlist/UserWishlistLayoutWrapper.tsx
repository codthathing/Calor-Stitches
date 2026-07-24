"use client";
import { deleteCookie, getCookie } from "@/hooks/usePreviousPath";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function UserWishlistLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (!pathname.includes("/user")) return null;
    
  return <section className="navSections">{children}</section>;
}
