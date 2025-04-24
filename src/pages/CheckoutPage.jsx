import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import CheckoutLoginDiv from "../components/checkout/CheckoutLoginDiv";
import CheckoutSection from "../components/checkout/CheckoutSection";
import PageSection from "../components/layout/PageSection";

const CheckoutPage = () => {

  const { setCart } = useContext(NavigateContext);
  usePageLoadEffects({});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "checkout", linkArrow: false }
  ]

  return (
    <PageSection id={"productReview"}>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="checkoutMain">
        <CheckoutLoginDiv />
        <CheckoutSection />
      </main>
    </PageSection>
  );
}

export default CheckoutPage;