import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";
import { useCartEffect } from "./cart_effect";

const CartUpdateBtn = () => {
  const { cloneCart, setCartItems } = useContext(ToggleRegister);
  const { setShowCartInfo } = useContext(CartContext);
  const { CheckCart, DisplayInfo } = useCartEffect();

  const UpdateCart = () => {
    const cartInfos = [];
    CheckCart(cartInfos);

    if (JSON.stringify(cloneCart) !== localStorage.getItem("cartItems") && cartInfos.length === 0) {
      setCartItems(cloneCart);
      cartInfos.push("Cart updated.");
    } else {
      setTimeout(() => {
        setShowCartInfo(false);
      }, 1000);
    };

    DisplayInfo(cartInfos);
  };

  return (
    <div id="cartUpdateBtnDiv">
      <button id="cartUpdateBtn" onClick={UpdateCart}>UPDATE CART</button>
    </div>
  );
};

export default CartUpdateBtn;