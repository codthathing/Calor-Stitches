import shipping from "../../../../asset/images-icons/serviceIcons/iconmonstr-delivery-2-240.png";
import money_back from "../../../../asset/images-icons/serviceIcons/iconmonstr-coin-2-240.png";
import payment from "../../../../asset/images-icons/serviceIcons/iconmonstr-credit-card-6-240.png";
import exchanges from "../../../../asset/images-icons/serviceIcons/iconmonstr-time-17-240.png"; 

const ServiceTemplate = () => {

  const services = [
    { id: 0, serviceIcon: shipping, serviceHead: "Free Shipping", serviceParagraph: "A free trackable two days delivery service on all orders over $90." },
    { id: 1, serviceIcon: money_back, serviceHead: "Money Back Guarantee", serviceParagraph: "We offer customers 100% money back guarantee on everything we sell." },
    { id: 2, serviceIcon: payment, serviceHead: "Flexible Payment", serviceParagraph: "All orders placed before Sunday to Friday are dispatched same day." },
    { id: 3, serviceIcon: exchanges, serviceHead: "Exchanges & Returns", serviceParagraph: "You have 30 days from the shipping date to return your purchase." },
  ]

  return (
    <section id="serviceSection">
      {services.map(({ id, serviceIcon, serviceHead, serviceParagraph }) => {
        return (
          <div key={id} className="serviceDiv">
            <img src={serviceIcon} className="serviceIcon" alt={serviceHead}/>
            <h1 className="serviceHead">{serviceHead}</h1>
            <p className="serviceParagraph">{serviceParagraph}</p>
          </div>
        );
      })}
    </section>
  );
}

export default ServiceTemplate;