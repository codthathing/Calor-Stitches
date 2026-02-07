"use client";
import { PageScrollToTop, useScrollEffect } from "@/hooks/useScrollEffect";
import PagePreload from "../ui/PagePreload";

export default function PageComponents() {
  const { showNavToTop } = useScrollEffect();

  return (
    <>
      <PageScrollToTop showIcon={showNavToTop} />
      <PagePreload />
    </>
  );
};
