import { useContext } from "react";
import { NavigateContext } from "../store/providers/NavigateContext";
import { CartContext } from "../store/providers/CartContext";
import { useShowPreload } from "./useShowPreload";

export const useCartEffect = () => {
  const { cloneCart, products } = useContext(NavigateContext);
  const { setCartInfoArray, setShowCartInfo } = useContext(CartContext);
  const { showPreload } = useShowPreload();

  const checkCart = (info) => {
    cloneCart.map(({ productName, cartAmt }) => {
      const product = products.find((product) => product.productName === productName);
      const { wishlistStock } = product;

      if (cartAmt > wishlistStock) {
        info.push(`No enough units of ${productName}`);
      }
    });
  };

  const displayInfo = (info) => {
    if (info.length > 0) {
      setCartInfoArray(info);
      showPreload();
      setTimeout(() => {
        setShowCartInfo(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 2000);
    }
  };

  return { checkCart, displayInfo };
};
