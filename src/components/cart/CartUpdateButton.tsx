"use client";
import { useCartEffect } from "@/hooks/useCartEffect";
import { useCartContext } from "@/store/providers/CartProvider";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageButtons from "../common/PageButtons";

export default function CartUpdateButton() {
  const { cloneCart, setCartItems, cartItems } = useNavigateContext();
  const { setShowCartInfo } = useCartContext();
  const { checkCart, displayInfo } = useCartEffect();

  const updateCart = () => {
    setShowCartInfo(false);
    const cartInfos: string[] = [];
    checkCart(cartInfos);

    if (JSON.stringify(cloneCart) !== JSON.stringify(cartItems) && cartInfos.length === 0) {
      setTimeout(() => {
        setCartItems(cloneCart);
      }, 2000);
      cartInfos.push("Cart updated.");
    } else {
      setTimeout(() => {
        setShowCartInfo(false);
      }, 1000);
    }

    displayInfo(cartInfos);
  };

  return (
    <div id="cartUpdateBtnDiv">
      <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-update-btn"} text={"update cart"} buttonFunction={updateCart} />
    </div>
  );
};
