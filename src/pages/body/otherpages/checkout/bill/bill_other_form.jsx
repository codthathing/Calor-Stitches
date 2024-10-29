import { useContext } from "react";
import { CheckoutContext } from "../checkout_section";
import BillForm from "./bill_form";

const BillOtherForm = () => {
  const { otherForm, setOtherForm, otherFormArray } = useContext(CheckoutContext);
  
  const HandleOtherForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtherForm({ ...otherForm, [name]: value });
  };

  return <BillForm formArray={otherFormArray} HandleInput={HandleOtherForm} />
};

export default BillOtherForm