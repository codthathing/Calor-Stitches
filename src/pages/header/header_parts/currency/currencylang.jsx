import { useContext, useState } from "react";
import nigeria_flag from "../../../../asset/images-icons/currencyFlags/nigeria-flag.png";
import america_flag from "../../../../asset/images-icons/currencyFlags/america-flag.png";
import { ToggleRegister } from "../../../contextpage";
import { ChangeProductDollar, ChangeProductNaira } from "./conversion";

const CurLangTemplate = ({className}) => {
  const [currency, setCurrency] = useState(false);
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
  const { products, setProducts, setCurSymbol, hotItems, setHotItems, newArrivals, setNewArrivals, onSales, setOnSales, latestItems, setLatestItems, wishlistItems, setWishlistItems, cartItems, setCartItems } = useContext(ToggleRegister);

  const ChangeCurrency = () => {
    if (curDetails.preCur === "(Naira ₦)") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      setProducts(products.map((details) => ChangeProductDollar(details)));
      setHotItems(hotItems.map((details) => ChangeProductDollar(details)));
      setNewArrivals(newArrivals.map((details) => ChangeProductDollar(details)));
      setOnSales(onSales.map((details) => ChangeProductDollar(details)));
      setLatestItems(latestItems.map((details) => ChangeProductDollar(details)));
      setWishlistItems(wishlistItems.map((details) => ChangeProductDollar(details)))
      setCartItems(cartItems.map((details) => ChangeProductDollar(details)))
      setCurSymbol("$");
    } else if (curDetails.preCur === "(USD $)") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      setProducts(products.map((details) => ChangeProductNaira(details)));
      setHotItems(hotItems.map((details) => ChangeProductNaira(details)));
      setNewArrivals(newArrivals.map((details) => ChangeProductNaira(details)));
      setOnSales(onSales.map((details) => ChangeProductNaira(details)));
      setLatestItems(latestItems.map((details) => ChangeProductNaira(details)));
      setWishlistItems(wishlistItems.map((details) => ChangeProductNaira(details)));
      setCartItems(cartItems.map((details) => ChangeProductNaira(details)));
      setCurSymbol("₦");
    }
    setCurrency(false);
  }

  return (
    <div id="curLangInnerDiv">
      <div onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} id="curInnerDiv">
        <p id="curLangInerText">{curDetails.preNation}</p>
        <main className="curLangMain">
          <p className="curLangText">{curDetails.preCur}</p>
          <i className="fa-solid fa-chevron-down curLangIcon"></i>
        </main>
        {currency &&
          <div onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} onClick={ChangeCurrency} className={`display-currency ${className}`}>
            <img src={curDetails.curFlag} alt={curDetails.curName} id="curFlag" />
            <p id="curText">{curDetails.curName}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default CurLangTemplate;