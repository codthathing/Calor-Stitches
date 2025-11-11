import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateProvider";
import { CartContext } from "../../store/providers/CartContext";
import { useCartEffect } from "../../hooks/useCartEffect";
import { useShowPreload } from "../../hooks/useShowPreload";
import PageButtons from "../common/PageButtons";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const CartCheckoutButton = () => {
  const { cartItems } = useContext(NavigateContext);
  const { city, setShowCartInfo } = useContext(CartContext);
  const navigate = useNavigateToPage();
  const { checkCart, displayInfo } = useCartEffect();
  const { showPreload } = useShowPreload();

  const handleCheckout = () => {
    setShowCartInfo(false);
    const checkoutInfos = [];
    if (cartItems < 1 && city === "address") {
      checkoutInfos.push("Kindly add items to the cart.");
      checkoutInfos.push("Please update the shipping address.");
    } else if (cartItems < 1) {
      checkoutInfos.push("Kindly add items to the cart.");
    } else if (city === "address") {
      checkoutInfos.push("Please update the shipping address");
    } else {
      checkCart(checkoutInfos);
    }

    showPreload();
    displayInfo(checkoutInfos);
    setTimeout(() => {
      if (checkoutInfos.length === 0) {
        navigate("/shop/checkout");
        setShowCartInfo(false);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 2000);
  };

  return <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-checkout-button"} buttonFunction={handleCheckout} text={"proceed to checkout"} />;
};

export default CartCheckoutButton;
