import AuthCancelIcon from "@/components/auth/AuthCancelIcon";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="navSections">
      <main className="mainRegister mainNav">
        <AuthCancelIcon />
        <div className="registerDiv">{children}</div>
      </main>
    </section>
  );
}
