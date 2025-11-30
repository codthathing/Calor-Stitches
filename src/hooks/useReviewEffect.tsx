"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { GeneralProductType } from "@/types/productType";
import { useState, useEffect } from "react";

export const useReviewEffect = (productId: number, type: string, text?: string, array?: { id: number; color?: string; style: boolean; text: string }[]) => {
  const [details, setDetails] = useState<{ text?: string; array?: { id: number; color?: string; style: boolean; text: string }[] } | null>(null);
  const { setProducts } = useNavigateContext();

  useEffect(() => {
    setDetails({ text: text, array: array });
  }, [array, text]);

  const changeDetails = (id: number) => {
    if (details) {
      const newText = details.array!.find((detail) => detail.id === id)!.text;
      const newArray = details.array!.map((detail) => ({ ...detail, style: detail.id === id ? true : false }));
      setDetails({ text: newText, array: newArray });
      setProducts((prevState) =>
        prevState.map((product) => {
          if (product.id === productId) {
            return type === "size" ? 
              ({ ...product, productSizes: newArray, productDetails: { ...product.productDetails, cartSize: newText } } as GeneralProductType) : 
              ({ ...product, productColors: newArray, productDetails: { ...product.productDetails, cartColor: newText } } as GeneralProductType);
          } else {
            return product;
          }
        })
      );
    }
  };

  const changeDetailsHover = (id: number, toggle: boolean) => {
    setDetails((prevState) => ({
      ...prevState,
      array: prevState!.array!.map((detail) => {
        if (detail.id === id && detail.text !== details!.text) {
          return { ...detail, style: toggle };
        } else {
          return detail;
        }
      }),
    }));
  };

  return { details, changeDetails, changeDetailsHover };
};
