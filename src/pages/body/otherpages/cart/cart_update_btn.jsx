import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { CartContext } from "./cartpage";
import { useCartEffect } from "./cart_effect";
import PageButtons from "../../../components/page_buttons";
import { useShowPreload } from "../../../components/show_preload";

const CartUpdateBtn = () => {
  const { cloneCart, setCartItems, cartItems } = useContext(ToggleRegister);
  const { setShowCartInfo } = useContext(CartContext);
  const { CheckCart, DisplayInfo } = useCartEffect();
  const { HandlePreload } = useShowPreload();

  const UpdateCart = () => {
    setShowCartInfo(false);
    const cartInfos = [];
    CheckCart(cartInfos);

    if (JSON.stringify(cloneCart) !== JSON.stringify(cartItems) && cartInfos.length === 0) {
      HandlePreload();
      setTimeout(() => {
        setCartItems(cloneCart);
      }, 2000);
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
      <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-update-btn"} text={"update cart"} buttonFunction={UpdateCart} />
    </div>
  );
};

export default CartUpdateBtn;