"use client";
import { GeneralProductType, SetState } from "@/types/productType";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useNavigateContext } from "./NavigateProvider";
import { useProductShownEffect } from "@/components/product/ProductDisplayComponents";

interface ReviewContext {
  products: GeneralProductType[];
  setProducts: SetState<GeneralProductType[]>;
  relatedProduct: GeneralProductType[];
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
  setPageNumbers: Dispatch<SetStateAction<{ id: number; style: boolean }[]>>; 
  pageNumbers: { id: number; style: boolean }[];
}

const ReviewContext = createContext<ReviewContext | null>(null);

export default function ReviewProvider({ children, productName }: { children: ReactNode; productName: string }) {
  const [product, setProduct] = useState<GeneralProductType | null>(null);
  const { products, setProducts } = useNavigateContext();
  const [relatedProduct, setRelatedProduct] = useState<GeneralProductType[]>([]);
  const [aboutNavigation, setAboutNavigation] = useState<string>("DESCRIPTION");
  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({ products: relatedProduct });

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName) as GeneralProductType;
    setProduct(presentProduct);
    const presentProductCategory = presentProduct.productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.map(({ text }) => text);
    const relatedProducts = products.filter(({ productInfo, productName }) => productName !== presentProduct.productName && productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.some(({ text }) => presentProductCategory?.includes(text))) as GeneralProductType[];
    setRelatedProduct(relatedProducts);
  }, [products, productName]);

  if (!product) return null;

  const { id, productImage, productImages, productName: productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc, wishlistStock, cartAmt, productDetails, productColors, productAvailable, productSizes, productInfo } = product as GeneralProductType;

  return <ReviewContext.Provider value={{ id, products, setProducts, relatedProduct, productAvailable, productNameText, productImage, productImages, cutOff, productPrice, averagePrice, priceOne, priceTwo, cartAmt, productDesc, productDetails, productColors, productSizes, wishlistStock, productInfo, aboutNavigation, setAboutNavigation, mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers }}>{children}</ReviewContext.Provider>;
}

export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) throw new Error("Make sure this component exists in the ReviewProvider tree");

  return context;
};
