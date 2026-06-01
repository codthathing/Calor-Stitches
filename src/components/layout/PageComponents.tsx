"use client";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import PagePreload from "../ui/PagePreload";
import PageScrollToTop from "../ui/PageScrollToTop";

export default function PageComponents() {
  const { showNavToTop } = useScrollEffect();

  return (
    <>
      <PageScrollToTop showIcon={showNavToTop} />
      <PagePreload />
    </>
  );
};
