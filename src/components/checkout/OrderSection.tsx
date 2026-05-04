import CheckoutMainText from "./CheckoutMainText";
import OrderInnerDiv from "./OrderInnerDiv";
import OrderSubtotalDiv from "./OrderSubtotalDiv";
import OrderPaymentMethodForm from "./OrderPaymentMethodForm";
import OrderTermsDiv from "./OrderTermsDiv";
import OrderButton from "./OrderButton";

export default function OrderSection() {
  return (
    <div className="billOrderDiv">
      <CheckoutMainText text={"Your order"} />
      <OrderInnerDiv />
      <OrderSubtotalDiv />
      <OrderPaymentMethodForm />
      <p id="personalInfoText">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
      <OrderTermsDiv />
      <OrderButton />
    </div>
  );
};
