import { useState } from "react";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import FormFeedback from "../components/common/FormFeedback";
import bank_card from "../assets/bank-card.jpeg";
import PaymentForm from "../components/payment/PaymentForm";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";

const PaymentPage = () => {
  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Payment", linkArrow: false },
  ];
  usePageLoadEffects({});

  const [paymentInfo, setPaymentInfo] = useState("");

  return (
    <div className="otherPages">
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="card-payment-main">
        <FormFeedback text={paymentInfo} showText={paymentInfo} />
        <section id="card-payment-section">
          <div id="card-payment-image-div">
            <img src={bank_card} alt="bank_card" id="card-payment-image" />
          </div>
          <PaymentForm setInfo={setPaymentInfo} />
        </section>
      </main>
    </div>
  );
};

export default PaymentPage;