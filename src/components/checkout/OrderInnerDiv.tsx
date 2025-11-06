import OrderProductTemplate from "./OrderProductTemplate";

const OrderInnerDiv = () => {
  return (
    <div id="oderInnerDiv">
      <div id="orderOptionDiv">
        <p className="orderOptionText">Product</p>
        <p className="orderOptionText">Subtotal</p>
      </div>
      <OrderProductTemplate />
    </div>
  );
};

export default OrderInnerDiv;