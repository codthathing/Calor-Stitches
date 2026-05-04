"use client";
import { useProductShownEffect } from "@/components/product/ProductDisplayComponents";
import { useProductFiltersArray } from "@/hooks/useProductFiltersArray";
import { useProductOptionsFilters } from "@/hooks/useProductOptionsFilters";
import { ProductFiltersType } from "@/types/displayType";
import { GeneralProductType } from "@/types/productType";
import { ChangeEvent, createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface DisplayContext {
  presentFilterProducts: GeneralProductType[];
  mapProducts: number;
  shownProducts: number;
  setMapProducts: Dispatch<SetStateAction<number>>;
  setPageNumbers: Dispatch<SetStateAction<{ id: number; style: boolean }[]>>;
  pageNumbers: { id: number; style: boolean }[];
  showFilterSection: boolean;
  setShowFilterSection: Dispatch<SetStateAction<boolean>>;
  productTypes: ProductFiltersType;
  setProductTypes: Dispatch<SetStateAction<ProductFiltersType>>;
  productColors: ProductFiltersType;
  setProductColors: Dispatch<SetStateAction<ProductFiltersType>>;
  productSize: { id: number; text: string; option: boolean; style: boolean; }[];
  setProductSize: Dispatch<SetStateAction<ProductFiltersType>>;
  filterOption: { minPrice: number; maxPrice: number; color: string; type: string; size: string; };
  changeProductsTypes: (id: number, option: boolean, text: string, productTypes: ProductFiltersType, setProductTypes: Dispatch<SetStateAction<ProductFiltersType>>) => void;
  changeProductsSize: (id: number, option: boolean, text: string, productSize: ProductFiltersType, setProductSize: Dispatch<SetStateAction<ProductFiltersType>>) => void;
  handleMinChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMaxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  changeProductsColors: (id: number, option: boolean, text: string, productColors: ProductFiltersType, setProductColors: Dispatch<SetStateAction<ProductFiltersType>>) => void;
}

const DisplayContext = createContext<DisplayContext | null>(null);

export default function DisplayProvider({ children }: { children: ReactNode }) {
  const { presentFilterProducts, filterOption, changeProductsTypes, handleMinChange, handleMaxChange, changeProductsColors, changeProductsSize } = useProductOptionsFilters();

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({ products: presentFilterProducts });

  const { productTypes, setProductTypes, productColors, setProductColors, productSize, setProductSize } = useProductFiltersArray();

  const [showFilterSection, setShowFilterSection] = useState<boolean>(false);

  return <DisplayContext.Provider value={{ presentFilterProducts, mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers, showFilterSection, setShowFilterSection, filterOption, changeProductsTypes, productTypes, setProductTypes, handleMinChange, handleMaxChange, changeProductsColors, productColors, setProductColors, changeProductsSize, productSize, setProductSize }}>{children}</DisplayContext.Provider>;
}

export const useDisplayContext = () => {
  const context = useContext(DisplayContext);
  if (!context) throw new Error("Make sure this component exists in the PaymentProvider tree");

  return context;
};
