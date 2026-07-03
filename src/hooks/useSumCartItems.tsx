"use client";
import { CartProductType } from "@/types/productType";
import { useMemo } from "react";

export const useSumCartItems = (cart: CartProductType[]) => {
  const total = useMemo(() => {
    return cart.reduce((sum, {productPrice, cartAmt}) => sum + (productPrice * cartAmt), 0);
  }, [cart]);
  
  return { total };
};