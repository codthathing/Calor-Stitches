import { useContext, useState } from "react";
import { CartContext } from "./cartpage";
import RegisterMessage from "../../../header/header_pages/account_pages/register_page/register_message";

const CartAddress = () => {
  const { city, setCity, setShowCartInfo, setCartInfoArray } = useContext(CartContext)

  const [showUpdateAddress, setShowUpdateAddress] = useState(false);
  const [address, setAddress] = useState({ country: "Nigeria", state: "", city: "" });

  const HandleAddress = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAddress({ ...address, [name]: value });
  };

  const [addressText, setAddressText] = useState("");
  const SubmitAddress = (e) => {
    e.preventDefault();
    if (!address.country) {
      setAddressText("Enter shipping country");
    } else if (!address.state) {
      setAddressText("Enter shipping state");
    } else if (!address.city) {
      setAddressText("Enter shipping city");
    } else {
      setAddressText(false);
      setCartInfoArray(["Shipping address updated."]);
      setTimeout(() => {
        window.scroll(0, 0);
        setCity(address.city);
        setAddress({ country: "Nigeria", state: "", city: "" });
        setShowUpdateAddress(false);
        setShowCartInfo(true);
      }, 1000);
    };
  };


  return (
    <div id="cartShippingAddressDiv">
      <div id="cartShippingDiv">
        <p id="cartShippingText">Shipping to <span id="cartShippingSpan">{city}</span></p>
        <p id="cartAddressText" onClick={() => setShowUpdateAddress(!showUpdateAddress)}>CHANGE ADDRESS</p>
      </div>
      {showUpdateAddress && <form id="cartAddressDiv" onSubmit={SubmitAddress}>
        <RegisterMessage showText={addressText} text={addressText} />
        <input type="text" name="country" value={address.country} onChange={HandleAddress} readOnly className="cartAddressInputs" />
        <input type="text" name="state" value={address.state} onChange={HandleAddress} placeholder="State" className="cartAddressInputs" />
        <input type="text" name="city" value={address.city} onChange={HandleAddress} placeholder="Town / City" className="cartAddressInputs" />
        <input type="submit" value="UPDATE" className="cartAddressBtn" />
      </form>}
    </div>
  );
};

export default CartAddress;