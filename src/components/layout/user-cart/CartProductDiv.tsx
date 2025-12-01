"use client";
import CartProductTemplate from "./CartProductTemplate";
import CartTotalMain from "./CartTotalMain";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import DefaultText from "@/components/common/DefaultText";

export default function CartProductDiv() {
  const { cartItems } = useNavigateContext();

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
