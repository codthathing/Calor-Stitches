"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";
import CartProductTemplate from "./CartProductTemplate";

export default function UserCartWrapper({ ElementOne, ElementTwo }: { ElementOne: ReactNode; ElementTwo: ReactNode }) {
  const { cartItems } = useNavigateContext();

  return (
    <div id="cartProductDiv">
      {cartItems.length > 0 ? (
        <>
          <CartProductTemplate cartArray={cartItems} />
          {ElementOne}
        </>
      ) : (
        ElementTwo
      )}
    </div>
  );
}
