"use client";
import { deleteCookie, getCookie } from "@/hooks/usePreviousPath";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function UserWishlistLayoutWrapper({ children }: { children: ReactNode }) {
  const  pathname = usePathname();

  if (!pathname.includes("/user")) {
    if (!getCookie("navigatedInternally")) deleteCookie("navigatedInternally");
    return null;
  };

  return (
    <section className="navSections">{children}</section>
  )
}