"use client";
import PageButtons from "@/components/common/PageButtons";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { useSumCartItems } from "@/hooks/useSumCartItems";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function CartTotalMain() {
  const { curSymbol, cartItems, setCart } = useNavigateContext();
  const { total } = useSumCartItems(cartItems);
  const navigate = useNavigateToPage();

  return (
    <main id="cartTotalPriceMain">
      <div id="totalPriceDiv">
        <p className="totalPrice" id="totalPriceText">Subtotal:</p>
        <p className="totalPrice" id="totalPriceValue">{curSymbol}{total.toFixed(2)}</p>
      </div>
      <div id="cartButtonsDiv">
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"navBtn cartButtons"} buttonFunction={() => {
          navigate("/shop/cart");
          setCart(false);
        }} text={"view cart"} />
        <PageButtons type={"button"} buttonType={"white-button"} buttonClass={"navBtn cartButtons"} buttonFunction={() => {
          navigate("/shop/checkout");
          setCart(false);
        }} text={"checkout"} />
      </div>
    </main>
  );
};
