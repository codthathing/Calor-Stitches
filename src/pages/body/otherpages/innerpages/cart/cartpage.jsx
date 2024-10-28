import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../../contextpage";
import PageLinkTemplate from "../../pagelinks";
import CartInfo from "./cart_info";
import ProductTopics from "../components/product_topics";
import CartProduct from "./cart_product";
import CartUpdateBtn from "./cart_update_btn";
import { useCalTotal } from "../../../../header/header_pages/cart_page/cart_total";
import CartAddress from "./cart_address";

const CartPage = () => {

  const { setNavbar, setCart, setToggleSideMenu, cartItems, curSymbol } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCart(false);
    setToggleSideMenu(false);
    setNavbar(true);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "cart", linkArrow: false }
  ]

  const cartTopics = ["Products", "Price", "Quantity", "Subtotal"];

  const [ showCartInfo, setShowCartInfo ] = useState(false);
  const [ cartInfoText, setCartInfoText ] = useState([]);

  const { total } = useCalTotal(cartItems);

  return (
    <div className="otherPages" id="productReview">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productWishlistCartMain">
        <CartInfo showInfoText={showCartInfo} infoTextArray={cartInfoText} />
        <section className="productWishlistCartSection">
          <ProductTopics id={"productCartTopicsDiv"} productTopicsArray={cartTopics} />
          <CartProduct />
        </section>
        <CartUpdateBtn setShowInfo={setShowCartInfo} setInfoText={setCartInfoText} />
        <div id="cartTotalDiv">
          <p id="cartTotalText">Cart totals</p>
          <div className="cartPriceValueDiv">
            <p className="cartPriceText">Subtotal</p>
            <p className="wishlistCartPriceValue">{curSymbol}{total.toFixed(2)}</p>
          </div>
          <CartAddress />
          <Link to="/shop/checkout"><button id="cartCheckoutButton">PROCEED TO CHECKOUT</button></Link>
        </div>
      </main>
    </div>
  );
}

export default CartPage;