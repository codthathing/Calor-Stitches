"use client";
import { ReactNode } from "react";
import AuthCancelIcon from "./AuthCancelIcon";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

export default function AuthLayoutWrapper({ children }: { children: ReactNode }) {
  useLockBodyScroll();

  return (
    <section className="navSections">
      <main className="mainRegister mainNav">
        <AuthCancelIcon />
        <div className="registerDiv">{children}</div>
      </main>
    </section>
  );
}
