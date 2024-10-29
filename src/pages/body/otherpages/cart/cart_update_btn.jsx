import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";

const CartUpdateBtn = () => {
  const { cartItems } = useContext(ToggleRegister);
  const { setShowCartInfo, setCartInfoArray } = useContext(CartContext);

  const UpdateCart = () => {
    if (JSON.stringify(cartItems) !== localStorage.getItem("cartItems")) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartInfoArray(["Cart updated."]);
      setTimeout(() => {
        setShowCartInfo(true);
      }, 1000);
    };
  };

  return (
    <div id="cartUpdateBtnDiv">
      <button id="cartUpdateBtn" onClick={UpdateCart}>UPDATE CART</button>
    </div>
  );
};

export default CartUpdateBtn;