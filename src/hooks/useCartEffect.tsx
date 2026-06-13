"use client";
import { useCartContext } from "@/store/providers/CartProvider";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { GeneralProductType } from "@/types/productType";

export const useCartEffect = () => {
  const { cloneCart, products, showPreload } = useNavigateContext();
  const { setCartInfoArray, setShowCartInfo } = useCartContext();

  const checkCart = (info: string[]) => {
    cloneCart.map(({ productName, cartAmt }) => {
      const product = products.find((product) => product.productName === productName) as GeneralProductType;
      const { wishlistStock } = product;

      if (cartAmt > wishlistStock) {
        info.push(`No enough units of ${productName}`);
      }
    });
  };

  const displayInfo = (info: string[]) => {
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
