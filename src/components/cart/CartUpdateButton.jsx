import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { CartContext } from "../../services/contexts/CartContext";
import { useCartEffect } from "../../hooks/useCartEffect";
import PageButtons from "../common/PageButtons";
import { useShowPreload } from "../../hooks/useShowPreload";

const CartUpdateButton = () => {
  const { cloneCart, setCartItems, cartItems } = useContext(NavigateContext);
  const { setShowCartInfo } = useContext(CartContext);
  const { checkCart, displayInfo } = useCartEffect();
  const { showPreload } = useShowPreload();

  const updateCart = () => {
    setShowCartInfo(false);
    const cartInfos = [];
    checkCart(cartInfos);

    if (JSON.stringify(cloneCart) !== JSON.stringify(cartItems) && cartInfos.length === 0) {
      showPreload();
      setTimeout(() => {
        setCartItems(cloneCart);
      }, 2000);
      cartInfos.push("Cart updated.");
    } else {
      setTimeout(() => {
        setShowCartInfo(false);
      }, 1000);
    };

    displayInfo(cartInfos);
  };

  return (
    <div id="cartUpdateBtnDiv">
      <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"cart-update-btn"} text={"update cart"} buttonFunction={updateCart} />
    </div>
  );
};

export default CartUpdateButton;