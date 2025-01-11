import { useContext } from "react";
import { CheckoutContext } from "../../services/contexts/CheckoutContext";
import BillForm from "./BillForm";

const BillUserForm = () => {
  const { userForm, setUserForm, userFormArray } = useContext(CheckoutContext);

  const handleUserForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserForm({ ...userForm, [name]: value });
  };

  return <BillForm formArray={userFormArray} HandleInput={handleUserForm} />
};

export default BillUserForm;