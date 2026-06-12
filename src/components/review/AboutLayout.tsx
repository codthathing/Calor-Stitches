"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import AboutDescription from "./AboutDescription";
import AboutReview from "./AboutReview";

export default function AboutLayout() {
  const { aboutNavigation } = useReviewContext();

  switch(aboutNavigation) {
    case "DESCRIPTION":
      return <AboutDescription />;
    case "REVIEW":
      return <AboutReview reviewText={"Add A Review"} reviewPlaceholder={"Your Review *"} reviewButton={"SUBMIT"} />;
    default:
      return null;
  }
};
