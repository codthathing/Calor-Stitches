"use client";
import { useCartContext } from "@/store/providers/CartProvider";
import PageFeedback from "../ui/PageFeedback";

export default function CartPageFeedback() {
  const { showCartInfo, cartInfoArray } = useCartContext();

  return (
    <PageFeedback showInfo={showCartInfo} infoTextArray={cartInfoArray} border={"#F3F2ED"} />
  )
}