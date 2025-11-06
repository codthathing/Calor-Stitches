import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";

const OrderProductTemplate = () => {
  const { cartItems, curSymbol } = useContext(NavigateContext);

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

export default OrderProductTemplate;