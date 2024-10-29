import { useContext, useState } from "react";
import { CheckoutContext } from "../checkout_section";

const OrderPayment = () => {
  const { setConfirmedMethod } = useContext(CheckoutContext);

  const [paymentArray, setPaymentArray] = useState([
    {
      id: 0,
      payHead: "Direct bank transfer",
      payText: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
      showPayText: false
    },
    {
      id: 1,
      payHead: "Pay on delivery",
      payText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illum commodi vel nisi, illo perferendis laborum amet? Dolore eum modi doloribus eaque eos, error sequi, molestias aliquid sit quisquam quaerat!",
      showPayText: false
    }
  ]);

  const TogglePayment = (id) => {
    const updatedPayment = paymentArray.map((payMethod) => {
      if (payMethod.id === id) {
        setConfirmedMethod({ payHead: payMethod.payHead });
        return { ...payMethod, showPayText: true }
      } else {
        return { ...payMethod, showPayText: false }
      };
    });
    setPaymentArray(updatedPayment);
  };

  return (
    <form id="orderPaymentDiv">
      {paymentArray.map(({ id, payHead, payText, showPayText }) => {
        return (
          <div key={id} className="paymentMethodDiv">
            <div className="paymentButtonText">
              <input type="radio" name="payment" className="paymentButton" onClick={() => TogglePayment(id)} />
              <p className="paymentText">{payHead}</p>
            </div>
            {showPayText && <p className="paymentMethodDetails">{payText}</p>}
          </div>
        );
      })}
    </form>
  );
};

export default OrderPayment;