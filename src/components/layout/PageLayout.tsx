"use client";
import { useCheckCurrency } from "@/hooks/useCheckCurrency";
import { useUpdateProducts } from "@/hooks/useUpdateProducts";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  useCheckCurrency();
  useUpdateProducts();

  return <>{children}</>;
}
