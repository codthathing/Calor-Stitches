import { useContext, useState } from "react";
import { CartContext } from "../services/contexts/CartContext";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import PageFeedback from "../components/ui/PageFeedback";
import CartProductSection from "../components/cart/CartProductSection";
import { useSumCartItems } from "../hooks/useSumCartItems";
import CartAddressDiv from "../components/cart/CartAddressDiv";
import CartCheckoutButton from "../components/cart/CartCheckoutButton";
import PageSection from "../components/layout/PageSection";

const CartPage = () => {

  const { setCart, curSymbol, cloneCart } = useContext(NavigateContext);

  const [city, setCity] = useState("address");
  const [showCartInfo, setShowCartInfo] = useState(false);
  const [cartInfoArray, setCartInfoArray] = useState([]);

  usePageLoadEffects({effectsArray: [{ effect: setShowCartInfo, value: false }]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "cart", linkArrow: false }
  ]

  const { total } = useSumCartItems(cloneCart);

  return (
    <CartContext.Provider value={{ city, setCity, setShowCartInfo, setCartInfoArray }}>
      <PageSection id={"productReview"}>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main className="productWishlistCartMain">
          <PageFeedback showInfo={showCartInfo} infoTextArray={cartInfoArray} border={"#F3F2ED"} />
          <CartProductSection />
          <div id="cartTotalDiv">
            <p id="cartTotalText">Cart totals</p>
            <div className="cartPriceValueDiv">
              <p className="cartPriceText">Subtotal</p>
              <p className="wishlistCartPriceValue">{curSymbol}{total.toFixed(2)}</p>
            </div>
            <CartAddressDiv />
            <CartCheckoutButton />
          </div>
        </main>
      </PageSection>
    </CartContext.Provider>
  );
}

export default CartPage;