import { useContext } from "react";
import { CheckoutContext } from "../checkout_section";
import BillOtherForm from "./bill_other_form";

const BillOtherAddress = () => {
  const { showOptAddress, setShowOptAddress } = useContext(CheckoutContext);

  return (
    <div id="billOtherAddresssDiv">
      <main id="billOtherMain">
        <input type="checkbox" name="" onClick={() => setShowOptAddress(!showOptAddress)} id="billOtherCheckbox" />
        <p id="billOtherText">Ship to a different address?</p>
      </main>
      {showOptAddress && <BillOtherForm />}
    </div>
  );
};

export default BillOtherAddress;