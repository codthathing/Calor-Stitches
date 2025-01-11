import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import CheckoutLoginDiv from "../components/checkout/CheckoutLoginDiv";
import CheckoutSection from "../components/checkout/CheckoutSection";

const CheckoutPage = () => {

  const { setCart } = useContext(NavigateContext);
  usePageLoadEffects({effectsArray: [{ effect: setCart, value: false }]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "checkout", linkArrow: false }
  ]

  return (
    <div className="otherPages" id="productReview">
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="checkoutMain">
        <CheckoutLoginDiv />
        <CheckoutSection />
      </main>
    </div>
  );
}

export default CheckoutPage;