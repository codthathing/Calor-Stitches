import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";
import { useCartEffect } from "./cart_effect";
import { useShowPreload } from "../../../components/show_preload";
import PageButtons from "../../../components/page_buttons";

const CartCheckout = () => {
  const { cartItems } = useContext(ToggleRegister);
  const { city, setShowCartInfo } = useContext(CartContext);
  const checkoutNavigate = useNavigate();
  const { CheckCart, DisplayInfo } = useCartEffect();
  const { HandlePreload } = useShowPreload();

  const HandleCheckout = () => {
    setShowCartInfo(false);
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

    HandlePreload();
    DisplayInfo(checkoutInfos);
    setTimeout(() => {
      if (checkoutInfos.length === 0) {
        checkoutNavigate("/shop/checkout");
        setShowCartInfo(false);
      } else {
        window.scrollTo(0, 0);
      };
    }, 2000);
  };

  return <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-checkout-button"} buttonFunction={HandleCheckout} text={"proceed to checkout"} />
};

export default CartCheckout;