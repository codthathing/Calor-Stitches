"use client";
import { useSumCartItems } from "@/hooks/useSumCartItems";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function OrderSubtotalDiv() {
  const { curSymbol, productShipValue, cartItems, hasMounted } = useNavigateContext();
  const { total } = useSumCartItems(cartItems);

  if (!hasMounted) return null;

  const subtotalArray = [
    { id: 0, subText: "Subtotal", subValue: total },
    { id: 1, subText: "Shipping fee", subValue: productShipValue.shipFee },
    { id: 2, subText: "Total", subValue: (total + productShipValue.shipFee) },
  ];

  return (
    <>
      {subtotalArray.map(({ id, subText, subValue }) => {
        return (
          <div key={id} className="orderSubTotalDiv">
            <p className="orderSubTotalText">{subText}</p>
            <p className="orderSubTotalValue">{curSymbol}{subValue.toFixed(2)}</p>
          </div>
        );
      })}
    </>
  )
};
