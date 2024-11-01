import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

export const useCalTotal = () => {
  const { cartItems } = useContext(ToggleRegister);

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].productPrice * cartItems[i].cartAmt;
  }
  return { total };
}