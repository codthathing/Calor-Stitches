"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import PageNavigationLinks from "../ui/PageNavigationLinks";

export default function ReviewNavigationLinks() {
  const { productNameText } = useReviewContext();

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/products", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: productNameText, linkArrow: false },
  ];

  return (
    <PageNavigationLinks pageLinks={pageLinkDetails} />
  )
}