import { useContext, useMemo } from "react";
import { ToggleRegister } from "../../../contextpage";

export const useCalTotal = (cart) => {
  const { presentCurrency } = useContext(ToggleRegister);

  const total = useMemo(() => {
    return cart.reduce((sum, {productPrice, cartAmt}) => sum + (productPrice * cartAmt), 0);
  }, [cart, presentCurrency]);
  
  return { total };
};