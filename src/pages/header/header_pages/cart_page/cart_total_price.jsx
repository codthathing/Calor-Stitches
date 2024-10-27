import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { useCalTotal } from "./cart_total";

const CartTotalPriceMain = () => {
  const { curSymbol, cartItems } = useContext(ToggleRegister);
  const { total } = useCalTotal(cartItems);

  return (
    <main id="cartTotalPriceMain">
      <div id="totalPriceDiv">
        <p className="totalPrice" id="totalPriceText">Subtotal:</p>
        <p className="totalPrice" id="totalPriceValue">
          {curSymbol}{total.toFixed(2)}
        </p>
      </div>
      <div id="cartButtonsDiv">
        <Link to="/shop/cart" className="navBtn cartButtons" id="cartButton">VIEW CART</Link>
        <Link to="/shop/checkout" className="navBtn cartButtons" id="checkoutButton">CHECKOUT</Link>
      </div>
    </main>
  );
};

export default CartTotalPriceMain;