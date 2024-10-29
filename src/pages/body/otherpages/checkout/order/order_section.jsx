import CheckoutText from "../components/checkout_text";
import OrderInnerDiv from "./order_inner_div";
import OrderSubtotal from "./order_subtotal";
import OrderPayment from "./order_payment";
import OrderTerms from "./order_terms";
import OrderButton from "./order_button";

const OrderSection = () => {
  return (
    <div className="billOrderDiv">
      <CheckoutText text={"Your order"} />
      <OrderInnerDiv />
      <OrderSubtotal />
      <OrderPayment />
      <p id="personalInfoText">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
      <OrderTerms />
      <OrderButton />
    </div>
  );
};

export default OrderSection;