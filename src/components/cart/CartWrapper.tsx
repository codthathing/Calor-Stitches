"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import CartProductTemplate from "./CartProductTemplate";
import { ReactNode } from "react";
import CartUpdateButton from "./CartUpdateButton";

export default function CartWrapper({ ElementOne, ElementTwo }: { ElementOne: ReactNode; ElementTwo: ReactNode }) {
  const { cartItems, hasMounted } = useNavigateContext();

  if (!hasMounted) return null;

  if (cartItems.length > 0) {
    return (
      <>
        <section className="productWishlistCartSection">
          {ElementOne}
          <CartProductTemplate />
        </section>
        <CartUpdateButton />
      </>
    );
  } else {
    return ElementTwo;
  }
}
