import CheckoutText from "../components/checkout_text";
import BillUserForm from "./bill_user_form";
import BillOtherAddress from "./bill_other_address";
import BillOptDiv from "./bill_opt_div";

const BillSection = () => {
  return (
    <div className="billOrderDiv">
      <CheckoutText text={"Billings"} />
      <BillUserForm />
      <BillOtherAddress />
      <BillOptDiv />
    </div>
  );
};

export default BillSection;