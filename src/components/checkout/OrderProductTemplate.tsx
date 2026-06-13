"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function OrderProductTemplate() {
  const { cartItems, curSymbol, hasMounted } = useNavigateContext();

  if (!hasMounted) return null;

  return (
    <main id="orderProductMain">
      {cartItems.map(({ id, productName, cartAmt, productPrice }) => {
        return (
          <div key={id} className="orderProductPriceDiv">
            <p className="orderProductNameAmt">{productName} * {cartAmt}</p>
            <p className="orderPriceValue">{curSymbol}{((cartAmt) * productPrice).toFixed(2)}</p>
          </div>
        );
      })}
    </main>
  );
};
