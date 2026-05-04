"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";

export default function UserCartDetailsWrapper({ children, cartAmt, productPrice }: { children: ReactNode, cartAmt?: number, productPrice: number }) {
  const { curSymbol } = useNavigateContext();

  return (
    <section className="cartDetailsSection">
      {children}
      <p className="cartProductText">{cartAmt} * {curSymbol}{productPrice.toFixed(2)}</p>
    </section>
  );
}
