"use client";
import { useSumCartItems } from "@/hooks/useSumCartItems";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function CartPriceText() {
    const { curSymbol, cloneCart } = useNavigateContext();
  const { total } = useSumCartItems(cloneCart);

  return <p className="wishlistCartPriceValue">{curSymbol}{total.toFixed(2)}</p>
}