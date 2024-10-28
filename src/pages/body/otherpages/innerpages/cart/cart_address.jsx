import { useState } from "react";

const CartAddress = () => {
  const [ showUpdateAddress, setShowUpdateAddress ] = useState(false);

  return (
    <div id="cartShippingAddressDiv">
      <div id="cartShippingDiv">
        <p id="cartShippingText">Shipping to <span id="cartShippingSpan">lagos</span></p>
        <p id="cartAddressText" onClick={() => setShowUpdateAddress(!showUpdateAddress)}>CHANGE ADDRESS</p>
      </div>
      {showUpdateAddress && <form id="cartAddressDiv">
        <input type="text" value={"Nigeria"} readOnly className="cartAddressInputs" />
        <input type="text" value={"State"} className="cartAddressInputs" />
        <input type="text" value={"Town / City"} className="cartAddressInputs" />
        <input type="button" value="UPDATE" className="cartAddressBtn" />
      </form>}
    </div>
  );
};

export default CartAddress;