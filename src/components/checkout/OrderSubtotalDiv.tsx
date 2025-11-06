import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import { useSumCartItems } from "../../hooks/useSumCartItems";

const OrderSubtotalDiv = () => {
  const { curSymbol, productShipValue, cartItems } = useContext(NavigateContext);
  const { total } = useSumCartItems(cartItems);

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

export default OrderSubtotalDiv;