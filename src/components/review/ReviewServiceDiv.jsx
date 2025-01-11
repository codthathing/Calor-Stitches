import shipping from "../../assets/service-icons/iconmonstr-delivery-2-240.png";
import exchanges from "../../assets/service-icons/iconmonstr-time-17-240.png"; 
import payment from "../../assets/service-icons/iconmonstr-credit-card-6-240.png";

const ReviewServiceDiv = () => {
  const serviceArray = [
    { id: 0, serviceImage: shipping, serviceText: "Free shipping on LAGOS orders ₦100, 000+" },
    { id: 1, serviceImage: exchanges, serviceText: "Delivery time 2-3 working days" },
    { id: 2, serviceImage: payment, serviceText: "All orders placed before Sunday to Friday are dispatched same day." },
  ];

  return (
    <div id="productDeliveryInfo">
      {serviceArray.map(({ id, serviceImage, serviceText }) => {
        return (
          <div key={id} className="productDeliveryInfoInnerDiv">
            <img src={serviceImage} alt="" className="productDeliveryInfoIcons" />
            <p className="productDeliveryInfoTexts">{serviceText} </p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewServiceDiv;