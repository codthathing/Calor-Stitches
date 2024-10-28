import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import CartTemplate from "./cartTemplate";
import CartTotalPriceMain from "./cart_total_price";
import DefaultText from "../components/default_text";

const CartProductDiv = () => {
  const { cartItems } = useContext(ToggleRegister);

  return (
    <div id="cartProductDiv">
      {cartItems.length > 0 ?
        <>
          <CartTemplate cartArray={cartItems} />
          <CartTotalPriceMain></CartTotalPriceMain>
        </>
        : <DefaultText textStyle={"start"} text={"No products in the cart"} />}
    </div>
  );
};

export default CartProductDiv;