import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";

export const useCartEffect = () => {
  const { cloneCart, products } = useContext(ToggleRegister);
  const { setCartInfoArray, setShowCartInfo } = useContext(CartContext)

  const CheckCart = (info) => {
    cloneCart.map(({ productName, cartAmt }) => {
      const product = products.find((product) => product.productName === productName);
      const { wishlistStock } = product;

      if (cartAmt > wishlistStock) {
        info.push(`No enough units of ${productName}`);
      }
    });
  }

  const DisplayInfo = (info) => {
    if (info.length > 0) {
      setCartInfoArray(info);
      setTimeout(() => {
        setShowCartInfo(true);
      }, 2000);
    };
  };

  return { CheckCart, DisplayInfo };
};