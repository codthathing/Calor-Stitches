"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import AboutDescription from "./AboutDescription";
import AboutReview from "./AboutReview";

export default function AboutLayout() {
  const { displayPage } = useReviewContext();

  if(displayPage === "DESCRIPTION") {
    return <AboutDescription />;
  } else if (displayPage === "REVIEW") {
    return <AboutReview reviewText={"Add A Review"} reviewPlaceholder={"Your Review *"} reviewButton={"SUBMIT"} />;
  };
};
