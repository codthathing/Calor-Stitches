"use client";
import { useCheckoutContext } from "@/store/providers/CheckoutProvider";
import PageFeedback from "../ui/PageFeedback";

export default function CheckoutPageFeedback() {
  const { pageInfoBorder, showCheckoutInfo, checkoutInfoArray } = useCheckoutContext();

  return (
    <PageFeedback border={pageInfoBorder} showInfo={showCheckoutInfo} infoTextArray={checkoutInfoArray} />
  )
}