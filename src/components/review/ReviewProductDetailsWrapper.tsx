"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import ReviewProductDetails from "./ReviewProductDetails";

export default function ReviewProductDetailsWrapper() {
  const { productInfo } = useReviewContext();

  return <>{productInfo && <ReviewProductDetails productInfo={productInfo} />}</>;
}
