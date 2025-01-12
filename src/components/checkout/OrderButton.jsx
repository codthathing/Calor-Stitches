import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../../services/contexts/CheckoutContext";
import { useShowPreload } from "../../hooks/useShowPreload";
import PageButtons from "../common/PageButtons";

const OrderButton = () => {
  const { showOptAddress, userFormArray, setShowCheckoutInfo, setCheckoutInfoArray, otherFormArray, seenTerms, confirmedMethod, setPageInfoBorder } = useContext(CheckoutContext);
  const navigate = useNavigate();
  const { showPreload } = useShowPreload();

  const handleOrder = () => {
    setShowCheckoutInfo(false);
    const orderInfos = [];
    if (!showOptAddress) {
      userFormArray.map(({ label, value }) => {
        if (!value && label) {
          orderInfos.push(`Billing ${label} is a required filed`);
        }
      });
    } else if (showOptAddress) {
      otherFormArray.map(({ label, value }) => {
        if (!value && label) {
          orderInfos.push(`Others ${label} is a required filed`);
        }
      });
    }

    if (!seenTerms) {
      orderInfos.push("Please read and accept the terms and conditions to proceed with your order.");
    }

    showPreload();
    if (orderInfos.length > 0) {
      setCheckoutInfoArray(orderInfos);
      setTimeout(() => {
        setShowCheckoutInfo(true);
        window.scrollTo(0, 0);
      }, 2000);
    } else {
      setTimeout(() => {
        if (confirmedMethod.payHead === "Direct bank transfer") {
          navigate("/pages/payment-page");
          setShowCheckoutInfo(false);
        } else {
          setCheckoutInfoArray(["Order placed and processing!"]);
          setPageInfoBorder("green");
          setShowCheckoutInfo(true);
          window.scrollTo(0, 0);
        }
      }, 2000);
    }
  };

  return <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"place-order-btn"} buttonFunction={handleOrder} text={"place order"} />;
};

export default OrderButton;
