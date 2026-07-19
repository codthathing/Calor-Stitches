"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import { ReactNode } from "react";
import PageSection from "../layout/PageSection";

export default function ReviewSectionWrapper({ children }: { children: ReactNode }) {
  const { sectionRef } = useReviewContext();
  
  return <PageSection ref={sectionRef} id="productReview">{children}</PageSection>;
}
