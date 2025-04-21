import visa_card from "../../assets/payment-icons/visa-card.webp";
import master_card from "../../assets/payment-icons/master-card.webp";
import american_express from "../../assets/payment-icons/american-express.webp";
import dinner_club from "../../assets/payment-icons/dinner-club.webp";
import discover from "../../assets/payment-icons/discover.webp";

const FooterPaymentIconTemplate = () => {
  const paymentIcons = [
    { id: 0, paymentIcon: visa_card, paymentAlt: "visa" },
    { id: 1, paymentIcon: master_card, paymentAlt: "master_card" },
    { id: 2, paymentIcon: american_express, paymentAlt: "american_express" },
    { id: 3, paymentIcon: dinner_club, paymentAlt: "dinner_club" },
    { id: 4, paymentIcon: discover, paymentAlt: "discover" },
  ];
  return (
    <aside id="payAside">
      {paymentIcons.map(({ id, paymentIcon, paymentAlt }) => {
        return <img key={id} loading="lazy" src={paymentIcon} alt={paymentAlt} className="payImage" />;
      })}
    </aside>
  );
};

export default FooterPaymentIconTemplate;
