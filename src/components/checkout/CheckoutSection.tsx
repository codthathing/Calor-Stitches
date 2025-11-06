import { useState } from "react";
import { CheckoutContext } from "../../store/providers/CheckoutContext";
import PageFeedback from "../ui/PageFeedback";
import BillSection from "./BillSection";
import OrderSection from "./OrderSection";

const CheckoutSection = () => {
  const [otherForm, setOtherForm] = useState({ first_name: "", last_name: "", country: "Nigeria", street: "", residence: "", city: "" });
  const otherFormArray = [
    { id: 0, label: "First name", type: "text", name: "first_name", value: otherForm.first_name, placeholder: "", status: "required" },
    { id: 1, label: "Last name", type: "text", name: "last_name", value: otherForm.last_name, placeholder: "", status: "required" },
    { id: 2, label: "Country/Region", type: "text", name: "country", value: otherForm.country, status: "readonly" },
    { id: 3, label: "Street address", type: "text", name: "street", value: otherForm.street, placeholder: "House number and street address", status: "required" },
    { id: 4, label: "", type: "text", name: "residence", value: otherForm.residence, placeholder: "Apartment, suite, unit, etc. (optional)", status: "required" },
    { id: 5, label: "Town/City", type: "text", name: "city", value: otherForm.city, placeholder: "", status: "required" },
  ];

  const [userForm, setUserForm] = useState({ first_name: "", last_name: "", country: "Nigeria", street: "", residence: "", city: "", phone: "", email: "" });
  const userFormArray = [
    { id: 0, label: "First name", type: "text", name: "first_name", value: userForm.first_name, placeholder: "", status: "required" },
    { id: 1, label: "Last name", type: "text", name: "last_name", value: userForm.last_name, placeholder: "", status: "required" },
    { id: 2, label: "Country/Region", type: "text", name: "country", value: userForm.country, status: "readonly" },
    { id: 3, label: "Street address", type: "text", name: "street", value: userForm.street, placeholder: "House number and street address", status: "required" },
    { id: 4, label: "", type: "text", name: "residence", value: userForm.residence, placeholder: "Apartment, suite, unit, etc. (optional)", status: "required" },
    { id: 5, label: "Town/City", type: "text", name: "city", value: userForm.city, placeholder: "", status: "required" },
    { id: 6, label: "Phone", type: "tel", name: "phone", value: userForm.phone, placeholder: "", status: "required" },
    { id: 7, label: "Email", type: "email", name: "email", value: userForm.email, placeholder: "", status: "required" },
  ];

  const [showOptAddress, setShowOptAddress] = useState(false);

  const [confirmedMethod, setConfirmedMethod] = useState({payHead: "Direct bank transfer"});

  const [seenTerms, setSeenTerms] = useState(false);

  const [ showCheckoutInfo, setShowCheckoutInfo ] = useState(false);
  const [checkoutInfoArray, setCheckoutInfoArray] = useState([]);

  const [pageInfoBorder, setPageInfoBorder] = useState("#FF0000");

  return (
    <CheckoutContext.Provider value={{ otherForm, setOtherForm, otherFormArray, userForm, setUserForm, userFormArray, showOptAddress, setShowOptAddress, confirmedMethod, setConfirmedMethod, seenTerms, setSeenTerms, setShowCheckoutInfo, setCheckoutInfoArray, setPageInfoBorder }}>
      <PageFeedback border={pageInfoBorder} showInfo={showCheckoutInfo} infoTextArray={checkoutInfoArray} />
      <section id="billOrderSection">
        <BillSection />
        <OrderSection />
      </section>
    </CheckoutContext.Provider>
  );
};

export default CheckoutSection;