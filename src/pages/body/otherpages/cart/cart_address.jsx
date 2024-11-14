import { useContext, useState } from "react";
import { CartContext } from "./cartpage";
import RegisterMessage from "../../../header/header_pages/account_pages/register_page/register_message";
import PageButtons from "../../../components/page_buttons";
import { useShowPreload } from "../../../components/show_preload";

const CartAddress = () => {
  const { city, setCity, setShowCartInfo, setCartInfoArray } = useContext(CartContext)

  const [showUpdateAddress, setShowUpdateAddress] = useState(false);
  const [address, setAddress] = useState({ country: "Nigeria", state: "", city: "" });

  const { HandlePreload } = useShowPreload(); 

  const HandleAddress = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAddress({ ...address, [name]: value });
  };

  const [addressText, setAddressText] = useState("");
  const SubmitAddress = (e) => {
    setShowCartInfo(false);
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
      HandlePreload();
      setTimeout(() => {
        window.scroll(0, 0);
        setCity(address.city);
        setAddress({ country: "Nigeria", state: "", city: "" });
        setShowUpdateAddress(false);
        setShowCartInfo(true);
      }, 2000);
    };
  };


  return (
    <div id="cartShippingAddressDiv">
      <div id="cartShippingDiv">
        <p id="cartShippingText">Shipping to <span id="cartShippingSpan">{city}</span></p>
        <PageButtons type={"text"} buttonFunction={() => setShowUpdateAddress(!showUpdateAddress)} text={"change address"} />
      </div>
      {showUpdateAddress && <form id="cartAddressDiv" onSubmit={SubmitAddress}>
        <RegisterMessage showText={addressText} text={addressText} />
        <input type="text" name="country" value={address.country} onChange={HandleAddress} readOnly className="cartAddressInputs" />
        <input type="text" name="state" value={address.state} onChange={HandleAddress} placeholder="State" className="cartAddressInputs" />
        <input type="text" name="city" value={address.city} onChange={HandleAddress} placeholder="Town / City" className="cartAddressInputs" />
        <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"cart-address-btn"} text={"update"} />
      </form>}
    </div>
  );
};

export default CartAddress;