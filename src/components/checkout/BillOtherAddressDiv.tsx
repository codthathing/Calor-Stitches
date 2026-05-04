"use client";
import { useCheckoutContext } from "@/store/providers/CheckoutProvider";
import BillOtherForm from "./BillOtherForm";

export default function BillOtherAddressDiv() {
  const { showOptAddress, setShowOptAddress } = useCheckoutContext();

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
