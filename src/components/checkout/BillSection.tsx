import CheckoutMainText from "./CheckoutMainText";
import BillUserForm from "./BillUserForm";
import BillOtherAddressDiv from "./BillOtherAddressDiv";
import BillOptNoteDiv from "./BillOptNoteDiv";

const BillSection = () => {
  return (
    <div className="billOrderDiv">
      <CheckoutMainText text={"Billings"} />
      <BillUserForm />
      <BillOtherAddressDiv />
      <BillOptNoteDiv />
    </div>
  );
};

export default BillSection;