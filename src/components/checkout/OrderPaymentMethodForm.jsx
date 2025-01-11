import { useContext, useState } from "react";
import { CheckoutContext } from "../../services/contexts/CheckoutContext";

const OrderPaymentMethodForm = () => {
  const { setConfirmedMethod } = useContext(CheckoutContext);

  const [paymentArray, setPaymentArray] = useState([
    {
      id: 0,
      payHead: "Direct bank transfer",
      payText: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
      showPayText: true
    },
    {
      id: 1,
      payHead: "Cash on delivery",
      payText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illum commodi vel nisi, illo perferendis laborum amet? Dolore eum modi doloribus eaque eos, error sequi, molestias aliquid sit quisquam quaerat!",
      showPayText: false
    }
  ]);

  const [selectedPaymentId, setSelectedPaymentId] = useState(0);

  const togglePayment = (id) => {
    const updatedPayment = paymentArray.map((payMethod) => {
      if (payMethod.id === id) {
        setConfirmedMethod({ payHead: payMethod.payHead });
        return { ...payMethod, showPayText: true }
      } else {
        return { ...payMethod, showPayText: false }
      };
    });
    setPaymentArray(updatedPayment);
    setSelectedPaymentId(id);
  };

  return (
    <form id="orderPaymentDiv">
      {paymentArray.map(({ id, payHead, payText, showPayText }) => {
        return (
          <div key={id} className="paymentMethodDiv">
            <div className="paymentButtonText">
              <input type="radio" name="payment" defaultChecked={selectedPaymentId === id} className="paymentButton" onClick={() => togglePayment(id)} />
              <p className="paymentText">{payHead}</p>
            </div>
            {showPayText && <p className="paymentMethodDetails">{payText}</p>}
          </div>
        );
      })}
    </form>
  );
};

export default OrderPaymentMethodForm;