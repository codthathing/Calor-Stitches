"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigateContext } from "./NavigateProvider";
import { useRouter } from "next/router";
import { GeneralProductType } from "@/types/productType";

const ViewContext = createContext<GeneralProductType | null>(null);

export default function ViewProvider({ children }: { children: ReactNode }) {
  const { products } = useNavigateContext();
  const location = useRouter();
  const name = location.query.name;
  const [product, setProduct] = useState<GeneralProductType | null>(null);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === name)!;
    setProduct(presentProduct);
  }, [products]);

  if (product) {
    const { id, productName, productImage, cutOff, wishlistStock, productAvailable, productPrice, averagePrice, priceOne, priceTwo, productDesc, productDetails, productColors, productSizes, cartAmt, productInfo } = product;

    return <ViewContext.Provider value={{ id, productImage, productName, productAvailable, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo }}>{children}</ViewContext.Provider>;
  }
}

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if(!context) throw new Error("Ensure this element is mounted");

  return context;
}