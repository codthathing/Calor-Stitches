import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

const CheckoutLogin = () => {
  const { setAccount } = useContext(ToggleRegister);

  return (
    <div id="checkoutLoginDiv">
    <p className="checkoutLoginTexts">Returning customer?</p>
    <p className="checkoutLoginTexts" onClick={() => setAccount(true)}>Click here to login</p>
  </div>
  );
};

export default CheckoutLogin;