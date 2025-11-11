import { useState, useEffect, useContext } from "react";
import { NavigateContext } from "../store/providers/NavigateProvider";

export const useReviewEffect = (productId, type, text, array) => {
  const [details, setDetails] = useState({ text, array });
  const { setProducts, products } = useContext(NavigateContext);
  
  useEffect(() => {
    setDetails({text: text, array: array});
  }, [array, text]);

  const changeDetails = (id) => {
    const newText = details.array.find((detail) => detail.id === id).text;
    const newArray = details.array.map((detail) => ({ ...detail, style: detail.id === id ? true : false }));
    setDetails({ text: newText, array: newArray });
    setProducts((prevState) =>
      prevState.map((product) => {
        if (product.id === productId) {
          return type === "size" ? { ...product, productSizes: newArray, productDetails: { ...product.productDetails, cartSize: newText } } : { ...product, productColors: newArray, productDetails: { ...product.productDetails, cartColor: newText } };
        } else {
          return product;
        };
      })
    );
  };

  const changeDetailsHover = (id, toggle) => {
    setDetails(prevState => ({...prevState, array: prevState.array.map((detail) => {
      if (detail.id === id && detail.text !== details.text) {
        return { ...detail, style: toggle };
      } else {
        return detail;
      };
    })}));
  };

  return { details, changeDetails, changeDetailsHover };
};
