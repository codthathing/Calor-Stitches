"use client";
import { usePageLoadEffects } from "@/hooks/usePageLoadEffects";
import { ReactNode } from "react";

export default function HomePageContainer({ children }: { children: ReactNode }) {
  usePageLoadEffects(null);

  return <>{children}</>;
}
