"use client";
import DefaultText from "@/components/common/DefaultText";
import WishlistProductTemplate from "./WishlistProductTemplate";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useRef } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

export default function WishlistProductDiv() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(scrollableRef);
  const { wishlistItems } = useNavigateContext();

  return <div ref={scrollableRef} id="wishListItemSection">{wishlistItems.length > 0 ? <WishlistProductTemplate wishlistItems={wishlistItems} /> : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />}</div>;
};
