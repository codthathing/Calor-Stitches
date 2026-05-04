"use client";
import { SetState } from "@/types/productType";
import { createContext, ReactNode, useContext, useState } from "react";

interface CheckoutContext {
  otherForm: { first_name: string, last_name: string, country: string, street: string, residence: string, city: string };
  setOtherForm: SetState<{ first_name: string, last_name: string, country: string, street: string, residence: string, city: string }>;
  otherFormArray: { id: number; label: string; type: string; name: string; value: string; placeholder?: string; status: string }[]

  userForm: { first_name: string, last_name: string, country: string, street: string, residence: string, city: string; phone: string; email: string };
  setUserForm: SetState<{ first_name: string, last_name: string, country: string, street: string, residence: string, city: string; phone: string; email: string }>;
  userFormArray: { id: number; label: string; type: string; name: string; value: string; placeholder?: string; status: string }[]

  showOptAddress: boolean;
  setShowOptAddress: SetState<boolean>;
  confirmedMethod: { payHead: string };
  setConfirmedMethod: SetState<{ payHead: string }>;
  seenTerms: boolean;
  setSeenTerms: SetState<boolean>;
  showCheckoutInfo: boolean;
  setShowCheckoutInfo: SetState<boolean>;
  checkoutInfoArray: string[];
  setCheckoutInfoArray: SetState<string[]>;
  pageInfoBorder: string;
  setPageInfoBorder: SetState<string>;
}

const CheckoutContext = createContext<CheckoutContext | null>(null);

export default function CheckoutProvider({ children }: { children: ReactNode }) {
  const [otherForm, setOtherForm] = useState({ first_name: "", last_name: "", country: "Nigeria", street: "", residence: "", city: "" });
  const otherFormArray = [
    { id: 0, label: "First name", type: "text", name: "first_name", value: otherForm.first_name, placeholder: "", status: "required" },
    { id: 1, label: "Last name", type: "text", name: "last_name", value: otherForm.last_name, placeholder: "", status: "required" },
    { id: 2, label: "Country/Region", type: "text", name: "country", value: otherForm.country, status: "readonly" },
    { id: 3, label: "Street address", type: "text", name: "street", value: otherForm.street, placeholder: "House number and street address", status: "required" },
    { id: 4, label: "", type: "text", name: "residence", value: otherForm.residence, placeholder: "Apartment, suite, unit, etc. (optional)", status: "required" },
    { id: 5, label: "Town/City", type: "text", name: "city", value: otherForm.city, placeholder: "", status: "required" },
  ];

  const [userForm, setUserForm] = useState({ first_name: "", last_name: "", country: "Nigeria", street: "", residence: "", city: "", phone: "", email: "" });
  const userFormArray = [
    { id: 0, label: "First name", type: "text", name: "first_name", value: userForm.first_name, placeholder: "", status: "required" },
    { id: 1, label: "Last name", type: "text", name: "last_name", value: userForm.last_name, placeholder: "", status: "required" },
    { id: 2, label: "Country/Region", type: "text", name: "country", value: userForm.country, status: "readonly" },
    { id: 3, label: "Street address", type: "text", name: "street", value: userForm.street, placeholder: "House number and street address", status: "required" },
    { id: 4, label: "", type: "text", name: "residence", value: userForm.residence, placeholder: "Apartment, suite, unit, etc. (optional)", status: "required" },
    { id: 5, label: "Town/City", type: "text", name: "city", value: userForm.city, placeholder: "", status: "required" },
    { id: 6, label: "Phone", type: "tel", name: "phone", value: userForm.phone, placeholder: "", status: "required" },
    { id: 7, label: "Email", type: "email", name: "email", value: userForm.email, placeholder: "", status: "required" },
  ];

  const [showOptAddress, setShowOptAddress] = useState<boolean>(false);

  const [confirmedMethod, setConfirmedMethod] = useState<{ payHead: string }>({payHead: "Direct bank transfer"});

  const [seenTerms, setSeenTerms] = useState<boolean>(false);

  const [ showCheckoutInfo, setShowCheckoutInfo ] = useState<boolean>(false);
  const [checkoutInfoArray, setCheckoutInfoArray] = useState<string[]>([]);

  const [pageInfoBorder, setPageInfoBorder] = useState<string>("#FF0000");

  return <CheckoutContext.Provider value={{ otherForm, setOtherForm, otherFormArray, userForm, setUserForm, userFormArray, showOptAddress, setShowOptAddress, confirmedMethod, setConfirmedMethod, seenTerms, setSeenTerms, showCheckoutInfo, setShowCheckoutInfo, checkoutInfoArray, setCheckoutInfoArray, pageInfoBorder, setPageInfoBorder }}>{children}</CheckoutContext.Provider>
}

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("Make sure this component exists in the CheckoutProvider tree");

  return context;
};