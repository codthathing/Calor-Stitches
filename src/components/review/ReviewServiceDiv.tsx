import { FaTruck, FaClock, FaBolt } from "react-icons/fa";

export default function ReviewServiceDiv() {
  const serviceArray = [
    { id: 0, ServiceImage: FaTruck, serviceText: "Free shipping on LAGOS orders ₦100, 000+" },
    { id: 1, ServiceImage: FaClock, serviceText: "Delivery time 2-3 working days" },
    { id: 2, ServiceImage: FaBolt, serviceText: "All orders placed before Sunday to Friday are dispatched same day." },
  ];

  return (
    <div id="productDeliveryInfo">
      {serviceArray.map(({ id, ServiceImage, serviceText }) => {
        return (
          <div key={id} className="productDeliveryInfoInnerDiv">
            <ServiceImage className="productDeliveryInfoIcons" /> 
            <p className="productDeliveryInfoTexts">{serviceText} </p>
          </div>
        );
      })}
    </div>
  );
};
