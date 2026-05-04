"use client";
import { SetState } from "@/types/productType";
import { createContext, ReactNode, useContext, useState } from "react";

const PaymentContext = createContext<{ paymentInfo: string; setPaymentInfo: SetState<string> } | null>(null);

export default function PaymentProvider({ children }: { children: ReactNode }) {
  const [paymentInfo, setPaymentInfo] = useState("");

  return (
    <PaymentContext.Provider value={{ paymentInfo, setPaymentInfo }}>{children}</PaymentContext.Provider>
  )
}

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (!context) throw new Error("Make sure this component exists in the PaymentProvider tree");

  return context;
}