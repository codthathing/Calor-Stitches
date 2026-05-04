"use client";
import { useCheckoutContext } from "@/store/providers/CheckoutProvider";
import BillForm from "./BillForm";
import { ChangeEvent } from "react";

export default function BillUserForm() {
  const { userForm, setUserForm, userFormArray } = useCheckoutContext();

  const handleUserForm = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm({ ...userForm, [name]: value });
  };

  return <BillForm formArray={userFormArray} handleInput={handleUserForm} />
};
