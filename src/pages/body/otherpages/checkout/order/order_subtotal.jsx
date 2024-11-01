import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";
import { useCalTotal } from "../../../../header/header_pages/cart_page/cart_total";

const OrderSubtotal = () => {
  const { curSymbol } = useContext(ToggleRegister);
  const { total } = useCalTotal();
  const shippingFee = 200;

  const subtotalArray = [
    { id: 0, subText: "Subtotal", subValue: total },
    { id: 1, subText: "Shipping fee", subValue: shippingFee },
    { id: 2, subText: "Total", subValue: (total + shippingFee) },
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

export default OrderSubtotal;