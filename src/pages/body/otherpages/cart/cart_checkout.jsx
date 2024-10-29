import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";

const CartCheckout = () => {
  const { cartItems } = useContext(ToggleRegister);
  const { city, setShowCartInfo, setCartInfoArray } = useContext(CartContext);
  const checkoutInfos = [];
  const checkoutNavigate = useNavigate();

  const HandleCheckout = (e) => {
    e.preventDefault();
    if (cartItems < 1 && city === "address") {
      checkoutInfos.push("Kindly add items to the cart.")
      checkoutInfos.push("Please update the shipping address.")
    } else if (cartItems < 1) {
      checkoutInfos.push("Kindly add items to the cart.")
    } else if (city === "address") {
      checkoutInfos.push("Please update the shipping address")
    } else {
      checkoutNavigate("/shop/checkout");
    };

    if(checkoutInfos) {
      setCartInfoArray(checkoutInfos);
      setTimeout(() => {
        setShowCartInfo(true);
      }, 1000)
    }
  };

  return <button id="cartCheckoutButton" onClick={HandleCheckout}>PROCEED TO CHECKOUT</button>
};

export default CartCheckout;