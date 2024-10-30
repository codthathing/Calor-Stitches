import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({setInfo}) => {
  const paymentNavigate = useNavigate();

  const [ paymentInput, setPaymentInput ] = useState({card_number: "", expiry_date: "", cvc: ""});
  const HandlePaymentInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentInput({...paymentInput, [name]:value});
  };

  const SubmitPaymentDetails = () => {
    if(!paymentInput.card_number) {
      setInfo("Enter card number");
    } else if(!paymentInput.expiry_date) {
      setInfo("Enter card expiry date");
    } else if (!paymentInput.cvc) {
      setInfo("Enter cvc number");
    } else {
      setInfo("Unable to confirm card details.");
    };
  };

  return (
    <div id="card-payment-div">
      <div id="card-payment-input-div">
        <input type="number" name="card_number" value={paymentInput.card_number} onChange={HandlePaymentInput} placeholder="Valid Card Number" className="card-payment-input" />
        <input type="number" name="expiry_date" value={paymentInput.expiry_date} onChange={HandlePaymentInput} placeholder="MM/YY" className="card-payment-input" />
        <input type="number" name="cvc" value={paymentInput.cvc} onChange={HandlePaymentInput} placeholder="CVC" className="card-payment-input" />
      </div>
      <div id="card-payment-buttons-div">
        <button type="button" className="card-payment-button" onClick={SubmitPaymentDetails}>Pay Now</button>
        <button type="button" className="card-payment-button" onClick={() => paymentNavigate("/shop/checkout")}>Cancel</button>
      </div>
    </div>
  );
};

export default PaymentForm;