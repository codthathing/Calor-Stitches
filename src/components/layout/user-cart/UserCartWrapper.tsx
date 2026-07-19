"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode, useRef } from "react";
import CartProductTemplate from "./CartProductTemplate";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

export default function UserCartWrapper({ ElementOne, ElementTwo }: { ElementOne: ReactNode; ElementTwo: ReactNode }) {
  const { cartItems, hasMounted } = useNavigateContext();
  const scrollableRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(scrollableRef);

  if (!hasMounted) return null;

  return (
    <div ref={scrollableRef} id="cartProductDiv">
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
