import { useEffect, useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../components/pagelinks";
import CheckoutLogin from "./checkout_login";
import CheckoutSection from "./checkout_section";

const CheckoutPage = () => {

  const { setNavbar, setCart, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCart(false);
    setToggleSideMenu(false);
    setNavbar(true);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "checkout", linkArrow: false }
  ]

  return (
    <div className="otherPages" id="productReview">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="checkoutMain">
        <CheckoutLogin />
        <CheckoutSection />
      </main>
    </div>
  );
}

export default CheckoutPage;