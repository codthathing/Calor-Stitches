"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";
import WishlistProductTemplate from "./WishlistProductTemplate";

export default function WishlistWrapper({ ElementOne, ElementTwo }: { ElementOne: ReactNode, ElementTwo: ReactNode }) {
  const { wishlistItems } = useNavigateContext();

  if (wishlistItems.length > 0) {
    return (
      <section className="productWishlistCartSection">
        {ElementOne}
        <WishlistProductTemplate wishlistProductArray={wishlistItems} />
      </section>
    );
  } else {
    return ElementTwo;
  }
}
