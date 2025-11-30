"use client";
import { useProductShownEffect } from "@/components/product/ProductDisplayComponents";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { useNavigateContext } from "./NavigateProvider";
import { GeneralProductType } from "@/types/productType";

interface LatestProviderInterface {
  setMapProducts: Dispatch<SetStateAction<number>>;
  mapProducts: number;
  shownProducts: number;
  products: GeneralProductType[];
}

const LatestContext = createContext<LatestProviderInterface | null>(null);

export default function LatestProvider({ children }: { children: ReactNode }) {
  const { products } = useNavigateContext();
  const { setMapProducts, mapProducts, shownProducts } = useProductShownEffect({ products: products, startPosition: 4 });

  return <LatestContext.Provider value={{ setMapProducts, mapProducts, shownProducts, products }}>{children}</LatestContext.Provider>;
}

export const useLatestContext = () => {
  const context = useContext(LatestContext);
  if (!context) throw new Error("Ensure this element is mounted!");

  return context;
}
