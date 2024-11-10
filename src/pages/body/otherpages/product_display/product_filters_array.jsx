import { useState } from "react";

export const useProductFiltersArray = () => {
  const [productTypes, setProductTypes] = useState([
    { id: 0, text: "t-shirts", option: true, style: false },
    { id: 1, text: "activewear", option: true, style: false },
    { id: 2, text: "jeans", option: true, style: false },
    { id: 3, text: "outerwear", option: true, style: false }
  ]);
  
  const [productColors, setProductColors] = useState([
    { id: 0, text: "olive green", color: "#808000", option: true, style: false },
    { id: 1, text: "army green", color: "#4B5320", option: true, style: false },
    { id: 2, text: "navy blue", color: "#000080", option: true, style: false },
    { id: 3, text: "pink", color: "pink", option: true, style: false },
  ]);
  
  const [productSize, setProductSize] = useState([
    { id: 0, text: "l", option: true, style: false },
    { id: 1, text: "xl", option: true, style: false },
    { id: 2, text: "xxl", option: true, style: false },
    { id: 3, text: "ll", option: true, style: false }
  ]);
  
  return {productTypes, setProductTypes, productColors, setProductColors, productSize, setProductSize};
}