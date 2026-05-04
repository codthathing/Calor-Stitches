"use client";
import { ProductFiltersType } from "@/types/displayType";
import { useState } from "react";

export const useProductFiltersArray = () => {
  const [productTypes, setProductTypes] = useState<ProductFiltersType>([
    { id: 0, text: "t-shirts", option: true, style: false },
    { id: 1, text: "activewears", option: true, style: false },
    { id: 2, text: "jeans", option: true, style: false },
    { id: 3, text: "outerwears", option: true, style: false },
    { id: 4, text: "dresses", option: true, style: false },
    { id: 5, text: "sweaters", option: true, style: false },
    { id: 6, text: "singlets", option: true, style: false },
    { id: 7, text: "crop tops", option: true, style: false },
  ]);

  const [productColors, setProductColors] = useState<ProductFiltersType>([
    { id: 0, text: "olive green", color: "#808000", option: true, style: false },
    { id: 1, text: "army green", color: "#4B5320", option: true, style: false },
    { id: 2, text: "navy blue", color: "#000080", option: true, style: false },
    { id: 3, text: "pink", color: "pink", option: true, style: false },
    { id: 4, text: "crimson", color: "#DC143C", option: true, style: false },
    { id: 5, text: "goldenrod", color: "#DAA520", option: true, style: false },
    { id: 6, text: "forest green", color: "#228B22", option: true, style: false },
    { id: 7, text: "moon black", color: "#191919", option: true, style: false },
    { id: 8, text: "deep sky blue", color: "#00BFFF", option: true, style: false },
  ]);

  const [productSize, setProductSize] = useState<ProductFiltersType>([
    { id: 0, text: "l", option: true, style: false },
    { id: 1, text: "xl", option: true, style: false },
    { id: 2, text: "xxl", option: true, style: false },
    { id: 3, text: "ll", option: true, style: false },
  ]);

  return { productTypes, setProductTypes, productColors, setProductColors, productSize, setProductSize };
};
