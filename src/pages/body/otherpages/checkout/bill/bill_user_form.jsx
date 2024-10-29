import { useContext } from "react";
import { CheckoutContext } from "../checkout_section";
import BillForm from "./bill_form";

const BillUserForm = () => {
  const { userForm, setUserForm, userFormArray } = useContext(CheckoutContext);

  const HandleUserForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm({ ...userForm, [name]: value });
  };

  return <BillForm formArray={userFormArray} HandleInput={HandleUserForm} />
};

export default BillUserForm;