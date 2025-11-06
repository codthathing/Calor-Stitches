import { startTransition, useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";

const CheckoutLoginDiv = () => {
  const { setAccount } = useContext(NavigateContext);

  return (
    <div id="checkoutLoginDiv">
      <p className="checkoutLoginTexts">Returning customer?</p>
      <p className="checkoutLoginTexts" onClick={() => startTransition(() => setAccount(true))}>Click here to login</p>
    </div>
  );
};

export default CheckoutLoginDiv;
