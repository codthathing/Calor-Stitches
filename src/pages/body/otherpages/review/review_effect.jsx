import { useState, useEffect, useContext } from "react";
import { ReviewContext } from "./productreview";
// import { ToggleRegister } from "../../../contextpage";

// export const useReviewEffect = (productId, text, array) => {
export const useReviewEffect = (text, array) => {
  const [details, setDetails] = useState({ text, array });
  const { products, setProducts } = useContext(ReviewContext);

  useEffect(() => {
    setDetails({ text: text, array: array });
  }, [text, array]);

  const ChangeDetails = (id, type) => {
    const newText = details.array.find((detail) => detail.id === id);
    if (newText) {
      const newArray = details.array.map((details) => ({ ...details, style: details.id === id }))
      setDetails({ text: newText.text, array: newArray });

    //   const newProducts = cloneProducts.map((product) => {
    //     if (product.id === productId) {
    //       return type === "size" ?
    //         { ...product, productDetails: { ...product.productDetails, cartSize: newText.text } } :
    //         { ...product, productDetails: { ...product.productDetails, cartColor: newText.text } };
    //     } else {
    //       return product;
    //     };
    //   });
    //   setCloneProducts(newProducts);
    };
  };

  const ChangeDetailsHover = (id, toggle) => {
    const newArray = details.array.map((detail) => {
      if (detail.id === id && detail.text !== details.text) {
        return { ...detail, style: toggle };
      } else {
        return detail;
      };
    });
    setDetails({ ...details, array: newArray });
  };

  return { details, ChangeDetails, ChangeDetailsHover };
};