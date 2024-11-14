import PageLinkTemplate from "../components/pagelinks";
import RegisterMessage from "../../../header/header_pages/account_pages/register_page/register_message";
import bank_card from "../../../../asset/images-icons/bank_card/bank_card.jpeg";
import PaymentForm from "./payment_form";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Payment", linkArrow: false },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [paymentInfo, setPaymentInfo] = useState("");

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="card-payment-main">
        <RegisterMessage text={paymentInfo} showText={paymentInfo} />
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