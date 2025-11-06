import { useContext } from "react";
import { CheckoutContext } from "../../store/providers/CheckoutContext";
import BillForm from "./BillForm";

const BillOtherForm = () => {
  const { otherForm, setOtherForm, otherFormArray } = useContext(CheckoutContext);
  
  const handleOtherForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtherForm({ ...otherForm, [name]: value });
  };

  return <BillForm formArray={otherFormArray} HandleInput={handleOtherForm} />
};

export default BillOtherForm