import Image from "next/image";

const FooterPaymentIconTemplate = () => {
  const paymentIcons = [
    { id: 0, paymentIcon: "/assets/payment-icons/visa-card.webp", paymentAlt: "visa" },
    { id: 1, paymentIcon: "/assets/payment-icons/master-card.webp", paymentAlt: "master_card" },
    { id: 2, paymentIcon: "/assets/payment-icons/american-express.webp", paymentAlt: "american_express" },
    { id: 3, paymentIcon: "/assets/payment-icons/dinner-club.webp", paymentAlt: "dinner_club" },
    { id: 4, paymentIcon: "/assets/payment-icons/discover.webp", paymentAlt: "discover" },
  ];
  return (
    <aside id="payAside">
      {paymentIcons.map(({ id, paymentIcon, paymentAlt }) => {
        return <Image key={id} loading="lazy" width={100} height={50} src={paymentIcon} alt={paymentAlt} className="payImage" />;
      })}
    </aside>
  );
};

export default FooterPaymentIconTemplate;
