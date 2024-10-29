import OrderProduct from "./order_product";

const OrderInnerDiv = () => {
  return (
    <div id="oderInnerDiv">
      <div id="orderOptionDiv">
        <p className="orderOptionText">Product</p>
        <p className="orderOptionText">Subtotal</p>
      </div>
      <OrderProduct />
    </div>
  );
};

export default OrderInnerDiv;