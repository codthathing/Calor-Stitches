import { useContext, useMemo } from "react";
import { NavigateContext } from "../store/providers/NavigateContext";

export const useSumCartItems = (cart) => {
  const { presentCurrency } = useContext(NavigateContext);

  const total = useMemo(() => {
    return cart.reduce((sum, {productPrice, cartAmt}) => sum + (productPrice * cartAmt), 0);
  }, [cart, presentCurrency]);
  
  return { total };
};