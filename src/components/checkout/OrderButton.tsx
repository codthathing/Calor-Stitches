"use client";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { useShowPreload } from "@/hooks/useShowPreload";
import { useCheckoutContext } from "@/store/providers/CheckoutProvider";
import PageButtons from "../common/PageButtons";

export default function OrderButton() {
  const { showOptAddress, userFormArray, setShowCheckoutInfo, setCheckoutInfoArray, otherFormArray, seenTerms, confirmedMethod, setPageInfoBorder } = useCheckoutContext();
  const navigate = useNavigateToPage();
  const { showPreload } = useShowPreload();

  const handleOrder = () => {
    setShowCheckoutInfo(false);
    const orderInfos: string[] = [];
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
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 2000);
    } else {
      setTimeout(() => {
        if (confirmedMethod.payHead === "Direct bank transfer") {
          navigate("/payment");
          setShowCheckoutInfo(false);
        } else {
          setCheckoutInfoArray(["Order placed and processing!"]);
          setPageInfoBorder("green");
          setShowCheckoutInfo(true);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }, 2000);
    }
  };

  return <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"place-order-btn"} buttonFunction={handleOrder} text={"place order"} />;
};
