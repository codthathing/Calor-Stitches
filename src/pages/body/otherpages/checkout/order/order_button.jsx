import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../checkout_section";

const OrderButton = () => {
  const { showOptAddress, userFormArray, setShowCheckoutInfo, setCheckoutInfoArray, otherFormArray, seenTerms, confirmedMethod, setPageInfoBorder } = useContext(CheckoutContext);
  const paymentNavigate = useNavigate();

  const HandleOrder = () => {
    const orderInfos = [];
    if (!showOptAddress) {
      userFormArray.map(({ label, value }) => {
        if (!value && label) {
          orderInfos.push(`Billing ${label} is a required filed`);
        };
      })
    } else if (showOptAddress) {
      otherFormArray.map(({ label, value }) => {
        if (!value && label) {
          orderInfos.push(`Others ${label} is a required filed`);
        };
      });
    };

    if(!seenTerms) {
      orderInfos.push("Please read and accept the terms and conditions to proceed with your order.");
    };

    if (orderInfos.length > 0) {
      setCheckoutInfoArray(orderInfos);
      setTimeout(() => {
        setShowCheckoutInfo(true);
      }, 1000);
    } else {
      if(confirmedMethod.payHead === "Direct bank transfer") {
        paymentNavigate("/pages/payment_page");
        setShowCheckoutInfo(false);
      } else {
        setCheckoutInfoArray(["Order placed and processing!"]);
        setPageInfoBorder("green");
        setTimeout(() => {
          setShowCheckoutInfo(true);
        }, 1000);
      };
    };
  };

  return <button id="placeOrderBtn" onClick={HandleOrder}>PLACE ORDER</button>
};

export default OrderButton;