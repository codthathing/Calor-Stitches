"use client";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { useCartContext } from "@/store/providers/CartProvider";
import { useShowPreload } from "@/hooks/useShowPreload";
import PageButtons from "../common/PageButtons";
import FormFeedback from "../common/FormFeedback";

export default function CartAddressDiv() {
  const { city, setCity, setShowCartInfo, setCartInfoArray } = useCartContext();

  const [showUpdateAddress, setShowUpdateAddress] = useState(false);
  const [address, setAddress] = useState({ country: "Nigeria", state: "", city: "" });

  const handleAddress:ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAddress({ ...address, [name]: value });
  };

  const { showPreload } = useShowPreload();

  const [addressText, setAddressText] = useState("");
  const submitAddress = (e: FormEvent<HTMLFormElement>) => {
    setShowCartInfo(false);
    e.preventDefault();
    if (!address.country) {
      setAddressText("Enter shipping country");
    } else if (!address.state) {
      setAddressText("Enter shipping state");
    } else if (!address.city) {
      setAddressText("Enter shipping city");
    } else {
      setAddressText("");
      setCartInfoArray(["Shipping address updated."]);
      showPreload();
      setTimeout(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        setCity(address.city);
        setAddress({ country: "Nigeria", state: "", city: "" });
        setShowUpdateAddress(false);
        setShowCartInfo(true);
      }, 2000);
    }
  };

  return (
    <div id="cartShippingAddressDiv">
      <div id="cartShippingDiv">
        <p id="cartShippingText">Shipping to <span id="cartShippingSpan">{city}</span></p>
        <PageButtons type={"text"} buttonFunction={() => setShowUpdateAddress(!showUpdateAddress)} text={"change address"} />
      </div>
      {showUpdateAddress && (
        <form id="cartAddressDiv" onSubmit={submitAddress}>
          <FormFeedback showText={Boolean(addressText)} text={addressText} />
          <input type="text" name="country" value={address.country} onChange={handleAddress} readOnly className="cartAddressInputs" />
          <input type="text" name="state" value={address.state} onChange={handleAddress} placeholder="State" className="cartAddressInputs" />
          <input type="text" name="city" value={address.city} onChange={handleAddress} placeholder="Town / City" className="cartAddressInputs" />
          <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"cart-address-btn"} text={"update"} />
        </form>
      )}
    </div>
  );
};
