import { FaTruck, FaUndo, FaCreditCard, FaHandHoldingUsd } from "react-icons/fa";

const HomeService = () => {

  const services = [
    { id: 0, ServiceIcon: FaTruck, serviceHead: "Free Shipping", serviceParagraph: "A free trackable two days delivery service on all orders over $90." },
    { id: 1, ServiceIcon: FaHandHoldingUsd, serviceHead: "Money Back Guarantee", serviceParagraph: "We offer customers 100% money back guarantee on everything we sell." },
    { id: 2, ServiceIcon: FaCreditCard, serviceHead: "Flexible Payment", serviceParagraph: "All orders placed before Sunday to Friday are dispatched same day." },
    { id: 3, ServiceIcon: FaUndo, serviceHead: "Exchanges & Returns", serviceParagraph: "You have 30 days from the shipping date to return your purchase." },
  ]

  return (
    <section id="serviceSection">
      {services.map(({ id, ServiceIcon, serviceHead, serviceParagraph }) => {
        return (
          <div key={id} className="serviceDiv">
            <ServiceIcon className="serviceIcon" /> 
            <h1 className="serviceHead">{serviceHead}</h1>
            <p className="serviceParagraph">{serviceParagraph}</p>
          </div>
        );
      })}
    </section>
  );
}

export default HomeService;