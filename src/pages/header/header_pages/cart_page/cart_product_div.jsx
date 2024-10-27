import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import CartTemplate from "./cartTemplate";
import CartTotalPriceMain from "./cart_total_price";

const CartProductDiv = () => {
  const { cartItems } = useContext(ToggleRegister);

  return (
    <div id="cartProductDiv">
      {cartItems.length > 0 ?
        <>
          <CartTemplate cartArray={cartItems} />
          <CartTotalPriceMain></CartTotalPriceMain>
        </>
        : <p className="defaultText" id="cartDefaultText">No products in the cart</p>}
    </div>
  );
};

export default CartProductDiv;