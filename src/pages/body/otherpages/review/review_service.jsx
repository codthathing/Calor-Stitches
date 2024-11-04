import shipping from "../../../../asset/images-icons/serviceIcons/iconmonstr-delivery-2-240.png";
import exchanges from "../../../../asset/images-icons/serviceIcons/iconmonstr-time-17-240.png"; 
import payment from "../../../../asset/images-icons/serviceIcons/iconmonstr-credit-card-6-240.png";

const ReviewService = () => {
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

export default ReviewService;