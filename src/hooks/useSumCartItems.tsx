"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { CartProductType } from "@/types/productType";
import { useMemo } from "react";

export const useSumCartItems = (cart: CartProductType[]) => {
  const { presentCurrency } = useNavigateContext();

  const total = useMemo(() => {
    return cart.reduce((sum, {productPrice, cartAmt}) => sum + (productPrice * cartAmt), 0);
  }, [cart, presentCurrency]);
  
  return { total };
};