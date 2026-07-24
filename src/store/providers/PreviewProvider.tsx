"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigateContext } from "./NavigateProvider";
import { GeneralProductType } from "@/types/productType";
import { usePathname } from "next/navigation";

const PreviewContext = createContext<GeneralProductType | null>(null);

export default function PreviewProvider({ children, productName }: { children: ReactNode; productName: string }) {
  const pathname = usePathname();
  const { products } = useNavigateContext();
  const [product, setProduct] = useState<GeneralProductType | null>(null);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName) as GeneralProductType;
    setProduct(presentProduct);
  }, [products, productName]);

  if (!product) return null;

  if (!pathname.includes("/product-preview")) return null;

  const { id, productImage, cutOff, wishlistStock, productAvailable, productPrice, averagePrice, priceOne, priceTwo, productDesc, productDetails, productColors, productSizes, cartAmt, productInfo } = product as GeneralProductType;

  return <PreviewContext.Provider value={{ id, productName, productImage, productAvailable, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo }}>{children}</PreviewContext.Provider>;
}

export const usePreviewContext = () => {
  const context = useContext(PreviewContext);
  if (!context) throw new Error("Make sure this component exists in the PreviewProvider tree");

  return context;
};
