"use client";
import { useCheckoutContext } from "@/store/providers/CheckoutProvider";
import BillForm from "./BillForm";
import { ChangeEvent } from "react";

export default function BillOtherForm() {
  const { otherForm, setOtherForm, otherFormArray } = useCheckoutContext();
  
  const handleOtherForm = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtherForm({ ...otherForm, [name]: value });
  };

  return <BillForm formArray={otherFormArray} handleInput={handleOtherForm} />
};
