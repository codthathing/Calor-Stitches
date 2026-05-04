"use client";
import { usePageLoadEffects } from "@/hooks/usePageLoadEffects";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageSection from "../layout/PageSection";
import { ReactNode } from "react";

export default function AdminPageSection({ children }: { children: ReactNode }) {
  const { setUserDetails } = useNavigateContext();

  usePageLoadEffects({ effectsArray: [{ effect: setUserDetails, value: false }] });

  return <PageSection>{children}</PageSection>;
}
