"use client";
import { usePaymentContext } from "@/store/providers/PaymentProvider";
import FormFeedback from "../common/FormFeedback";

export default function PaymentFormFeedback() {
  const { paymentInfo } = usePaymentContext();

  return <FormFeedback text={paymentInfo} showText={Boolean(paymentInfo)} />
}