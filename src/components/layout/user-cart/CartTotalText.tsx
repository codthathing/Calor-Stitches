"use client";
import { useSumCartItems } from "@/hooks/useSumCartItems";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function CartTotalText() {
  const { curSymbol, cartItems } = useNavigateContext();
  const { total } = useSumCartItems(cartItems);

  return (
    <p className="totalPrice" id="totalPriceValue">
      {curSymbol}
      {total.toFixed(2)}
    </p>
  );
}
