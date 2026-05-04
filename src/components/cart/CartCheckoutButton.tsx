"use client";
import { useCartEffect } from "@/hooks/useCartEffect";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { useShowPreload } from "@/hooks/useShowPreload";
import { useCartContext } from "@/store/providers/CartProvider";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageButtons from "../common/PageButtons";

export default function CartCheckoutButton() {
  const { cartItems } = useNavigateContext();
  const { city, setShowCartInfo } = useCartContext();
  const navigate = useNavigateToPage();
  const { checkCart, displayInfo } = useCartEffect();
  const { showPreload } = useShowPreload();

  const handleCheckout = () => {
    setShowCartInfo(false);
    const checkoutInfos: string[] = [];
    if (cartItems.length < 1 && city === "address") {
      checkoutInfos.push("Kindly add items to the cart.");
      checkoutInfos.push("Please update the shipping address.");
    } else if (cartItems.length < 1) {
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
        navigate("/checkout");
        setShowCartInfo(false);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 2000);
  };

  return <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-checkout-button"} buttonFunction={handleCheckout} text={"proceed to checkout"} />;
};
