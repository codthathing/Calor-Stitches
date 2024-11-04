import Payment from "../../../footer/payment";

const ReviewPayment = () => {
  return (
    <div id="productDeliveryPayment">
      <p id="productDeliveryPaymentText">Your payment information is processed securely. Our store do not save any card details nor have access to credit card info.</p>
      <Payment />
    </div>
  );
};

export default ReviewPayment