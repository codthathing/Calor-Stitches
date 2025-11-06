import { useContext } from "react";
import { CheckoutContext } from "../../store/providers/CheckoutContext";

const OrderTermsDiv = () => {
  const { seenTerms, setSeenTerms } = useContext(CheckoutContext);

  return (
    <div id="termsDiv">
      <input type="checkbox" id="termsCheckbox" onClick={() => setSeenTerms(!seenTerms)} />
      <p id="termsText">I have read and agree to the website terms and conditions *</p>
    </div>
  );
};

export default OrderTermsDiv;