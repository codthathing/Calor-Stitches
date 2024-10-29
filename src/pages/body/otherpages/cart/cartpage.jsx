import { useEffect, useContext, useState, createContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../components/pagelinks";
import PageInfo from "../components/page_info";
import CartSection from "./cart_section";
import { useCalTotal } from "../../../header/header_pages/cart_page/cart_total";
import CartAddress from "./cart_address";
import CartCheckout from "./cart_checkout";

export const CartContext = createContext();
const CartPage = () => {

  const { setNavbar, setCart, setToggleSideMenu, cartItems, curSymbol, setShowPageInfo } = useContext(ToggleRegister);

  const [city, setCity] = useState("address");
  const [showCartInfo, setShowCartInfo] = useState(false);
  const [cartInfoArray, setCartInfoArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCart(false);
    setToggleSideMenu(false);
    setNavbar(true);
    setShowCartInfo(false);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "cart", linkArrow: false }
  ]

  const { total } = useCalTotal(cartItems);

  return (
    <CartContext.Provider value={{ city, setCity, setShowCartInfo, setCartInfoArray }}>
      <div className="otherPages" id="productReview">
        <PageLinkTemplate pageLinks={pageLinkDetails} />
        <main className="productWishlistCartMain">
          <PageInfo showInfo={showCartInfo} infoTextArray={cartInfoArray} border={"#F3F2ED"} />
          <CartSection />
          <div id="cartTotalDiv">
            <p id="cartTotalText">Cart totals</p>
            <div className="cartPriceValueDiv">
              <p className="cartPriceText">Subtotal</p>
              <p className="wishlistCartPriceValue">{curSymbol}{total.toFixed(2)}</p>
            </div>
            <CartAddress />
            <CartCheckout />
          </div>
        </main>
      </div>
    </CartContext.Provider>
  );
}

export default CartPage;