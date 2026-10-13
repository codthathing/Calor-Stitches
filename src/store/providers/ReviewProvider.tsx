"use client";
import { GeneralProductType, SetState } from "@/types/productType";
import { createContext, Dispatch, ReactNode, RefObject, SetStateAction, useContext, useRef, useState } from "react";
import { useProductShownEffect } from "@/components/product/ProductDisplayComponents";
import { useScrollTrap } from "@/hooks/useScrollTrap";

interface ReviewContext {
  relatedProducts: GeneralProductType[];
  id: number;
  productImage: string; 
  productImages?: { id: number; style: boolean; image: string }[], 
  productNameText: string; 
  cutOff?: number; 
  productPrice?: number; 
  averagePrice?: number; 
  priceOne?: number; 
  priceTwo?: number; 
  productDesc?: string; 
  wishlistStock: number; 
  cartAmt: number; 
  productDetails?: { cartSize?: string; cartColor?: string }; 
  productColors?: { id: number; color: string; text: string; style: boolean }[]; 
  productAvailable?: string; 
  productSizes?: { id: number; text: string; style: boolean }[]; 
  productInfo?: { id: number; name: string; type: string; links: { id: number; text: string; style?: boolean }[] }[];
  aboutNavigation: string;
  setAboutNavigation: SetState<string>;
  mapProducts: number; 
  shownProducts: number; 
  setMapProducts: Dispatch<SetStateAction<number>>;
  pageNumbers: { id: number; style: boolean }[];
  sectionRef: RefObject<HTMLElement | null>;
  innerScrollRef: RefObject<HTMLDivElement | null>;
}

const ReviewContext = createContext<ReviewContext | null>(null);

export default function ReviewProvider({ children, product, relatedProducts }: { children: ReactNode; product: GeneralProductType; relatedProducts: GeneralProductType[] }) {
  const [aboutNavigation, setAboutNavigation] = useState<string>("DESCRIPTION");
  const { mapProducts, shownProducts, setMapProducts, pageNumbers } = useProductShownEffect({ products: relatedProducts });
  const sectionRef = useRef<HTMLElement>(null);
  const innerScrollRef = useRef<HTMLDivElement>(null);
  useScrollTrap(sectionRef, innerScrollRef);

  const { id, productImage, productImages, productName: productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc, wishlistStock, cartAmt, productDetails, productColors, productAvailable, productSizes, productInfo } = product as GeneralProductType;

  return <ReviewContext.Provider value={{ id, relatedProducts, productAvailable, productNameText, productImage, productImages, cutOff, productPrice, averagePrice, priceOne, priceTwo, cartAmt, productDesc, productDetails, productColors, productSizes, wishlistStock, productInfo, aboutNavigation, setAboutNavigation, mapProducts, shownProducts, setMapProducts, pageNumbers, sectionRef, innerScrollRef }}>{children}</ReviewContext.Provider>;
}

export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) throw new Error("Make sure this component exists in the ReviewProvider tree");

  return context;
};
