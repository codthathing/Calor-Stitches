import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";
import { useCartEffect } from "./cart_effect";

const CartCheckout = () => {
  const { cartItems } = useContext(ToggleRegister);
  const { city, setShowCartInfo } = useContext(CartContext);
  const checkoutNavigate = useNavigate();
  const { CheckCart, DisplayInfo } = useCartEffect();

  const HandleCheckout = () => {
    const checkoutInfos = [];
    if (cartItems < 1 && city === "address") {
      checkoutInfos.push("Kindly add items to the cart.")
      checkoutInfos.push("Please update the shipping address.")
    } else if (cartItems < 1) {
      checkoutInfos.push("Kindly add items to the cart.")
    } else if (city === "address") {
      checkoutInfos.push("Please update the shipping address")
    } else {
      CheckCart(checkoutInfos)
    };

    DisplayInfo(checkoutInfos);
    if(checkoutInfos.length === 0) {
      checkoutNavigate("/shop/checkout");
      setShowCartInfo(false);
    }
  };

  return <button id="cartCheckoutButton" onClick={HandleCheckout}>PROCEED TO CHECKOUT</button>
};

export default CartCheckout;