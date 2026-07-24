"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function UserWishlistLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (!pathname.includes("/user")) return null;
    
  return <section className="navSections">{children}</section>;
}
