"use client";
import { useCartEffect } from "@/hooks/useCartEffect";
import { useCartContext } from "@/store/providers/CartProvider";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageButtons from "../common/PageButtons";

export default function CartCheckoutButton() {
  const { cartItems, showPreload, navigateToPage } = useNavigateContext();
  const { city, setShowCartInfo } = useCartContext();
  const { checkCart, displayInfo } = useCartEffect();

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

    displayInfo(checkoutInfos);
    if (checkoutInfos.length === 0) {
      navigateToPage("/checkout");
      setShowCartInfo(false);
    } else {
      showPreload();
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 2000);
    }
  };

  return <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-checkout-button"} buttonFunction={handleCheckout} text={"proceed to checkout"} />;
};
