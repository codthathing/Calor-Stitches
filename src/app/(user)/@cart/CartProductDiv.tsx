import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import CartProductTemplate from "./CartProductTemplate";
import CartTotalMain from "./CartTotalMain";
import DefaultText from "../../common/DefaultText";

const CartProductDiv = () => {
  const { cartItems } = useContext(NavigateContext);

  return (
    <div id="cartProductDiv">
      {cartItems.length > 0 ? (
        <>
          <CartProductTemplate cartArray={cartItems} />
          <CartTotalMain></CartTotalMain>
        </>
      ) : (
        <DefaultText textStyle={"start"} text={"No products in the cart"} />
      )}
    </div>
  );
};

export default CartProductDiv;
