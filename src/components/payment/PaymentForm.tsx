"use client";
import PageButtons from "../common/PageButtons";
import { ChangeEvent, useState } from "react";
import { usePaymentContext } from "@/store/providers/PaymentProvider";
import { useRouter } from "next/navigation";

export default function PaymentForm() {
  const { setPaymentInfo } = usePaymentContext();
  const [ paymentInput, setPaymentInput ] = useState({card_number: "", expiry_date: "", cvc: ""});
  const handlePaymentInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPaymentInput({...paymentInput, [name]:value});
  };
  const router = useRouter();

  const submitPaymentDetails = () => {
    if(!paymentInput.card_number) {
      setPaymentInfo("Enter card number");
    } else if(!paymentInput.expiry_date) {
      setPaymentInfo("Enter card expiry date");
    } else if (!paymentInput.cvc) {
      setPaymentInfo("Enter cvc number");
    } else {
      setPaymentInfo("Unable to confirm card details.");
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
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"card-payment-button"} buttonFunction={() => router.push("/checkout")} text={"cancel"} />
      </div>
    </div>
  );
};
