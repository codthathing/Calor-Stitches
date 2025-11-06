import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageButtons from "../common/PageButtons";

const PaymentForm = ({setInfo}) => {
  const navigate = useNavigate();

  const [ paymentInput, setPaymentInput ] = useState({card_number: "", expiry_date: "", cvc: ""});
  const handlePaymentInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentInput({...paymentInput, [name]:value});
  };

  const submitPaymentDetails = () => {
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
        <input type="number" name="card_number" value={paymentInput.card_number} onChange={handlePaymentInput} placeholder="Valid Card Number" className="card-payment-input" />
        <input type="number" name="expiry_date" value={paymentInput.expiry_date} onChange={handlePaymentInput} placeholder="MM/YY" className="card-payment-input" />
        <input type="number" name="cvc" value={paymentInput.cvc} onChange={handlePaymentInput} placeholder="CVC" className="card-payment-input" />
      </div>
      <div id="card-payment-buttons-div">
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"card-payment-button"} buttonFunction={submitPaymentDetails} text={"pay now"} />
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"card-payment-button"} buttonFunction={() => navigate("/shop/checkout")} text={"cancel"} />
      </div>
    </div>
  );
};

export default PaymentForm;