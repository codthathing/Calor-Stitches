"use client";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";

export default function UserCartDetailsWrapper({ children, productName, cartAmt, productPrice }: { children: ReactNode, productName: string, cartAmt?: number, productPrice: number }) {
  const { curSymbol } = useNavigateContext();
  const navigate = useNavigateToPage();

  return (
    <section className="cartDetailsSection">
      <h1 className="cartProductName" onClick={() => navigate(`/product/${productName}`)}>
        {productName}
      </h1>
      {children}
      <p className="cartProductText">
        {cartAmt} * {curSymbol}
        {productPrice.toFixed(2)}
      </p>
    </section>
  );
}
