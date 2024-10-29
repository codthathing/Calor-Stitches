import PageLinkTemplate from "./components/pagelinks";
import bank_card from "../../../asset/images-icons/bank_card/bank_card.jpeg";

const PaymentPage = () => {
  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Payment", linkArrow: false },
  ];

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="card-payment-main">
        <div id="card-payment-image-div">
          <img src={bank_card} alt="bank_card" id="card-payment-image" />
        </div>
        <div id="card-payment-div">
          <div id="card-payment-input-div">
            <input type="number" placeholder="Valid Card Number" className="card-payment-input" />
            <input type="number" placeholder="MM/YY" className="card-payment-input" />
            <input type="number" placeholder="CVC" className="card-payment-input" />
          </div>
          <div id="card-payment-buttons-div">
            <button type="button" className="card-payment-button">Pay Now</button>
            <button type="button" className="card-payment-button">Cancel</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;