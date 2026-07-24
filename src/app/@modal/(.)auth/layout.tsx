import AuthLayoutWrapper from "@/components/auth/AuthLayoutWrapper";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
