import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

export const useCalTotal = () => {
  const { cloneCart } = useContext(ToggleRegister);

  let total = cloneCart.reduce((sum, {productPrice, cartAmt}) => sum + (productPrice * cartAmt), 0);
  
  return { total };
}