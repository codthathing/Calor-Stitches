import { useState, useEffect, useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";

export const useReviewEffect = (productId, type, text, array) => {
  const [details, setDetails] = useState({ text: text, array: array });
  const { products, setProducts } = useContext(NavigateContext);

  useEffect(() => {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        return type === "size" ?
          { ...product, productDetails: { ...product.productDetails, cartSize: details.text } } :
          { ...product, productDetails: { ...product.productDetails, cartColor: details.text } };
      } else {
        return product;
      };
    });
    setProducts(newProducts);
  }, [details.text, productId, type]);

  const changeDetails = (id) => {
    const newText = details.array.find((detail) => detail.id === id);
    if (newText) {
      const newArray = details.array.map((detail) => ({ ...detail, style: detail.id === id ? true : false }));
      setDetails({ text: newText.text, array: newArray });
    };
  };

  const changeDetailsHover = (id, toggle) => {
    const newArray = details.array.map((detail) => {
      if (detail.id === id && detail.text !== details.text) {
        return { ...detail, style: toggle };
      } else {
        return detail;
      };
    });
    setDetails({ ...details, array: newArray });
  };

  return { details, changeDetails, changeDetailsHover };
};