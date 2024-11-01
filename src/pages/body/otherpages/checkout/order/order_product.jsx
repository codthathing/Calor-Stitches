import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";

const OrderProduct = () => {
  const { cartItems, curSymbol } = useContext(ToggleRegister);

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

export default OrderProduct;