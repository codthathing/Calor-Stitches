import { useContext, useEffect, useState } from "react";
import nigeria_flag from "../../../../asset/images-icons/currencyFlags/nigeria-flag.png";
import america_flag from "../../../../asset/images-icons/currencyFlags/america-flag.png";
import { ToggleRegister } from "../../../contextpage";
import { useConversion } from "./conversion";

// localStorage.clear()
const CurLangTemplate = ({ className }) => {
  const { ChangeProductDollar, ChangeProductNaira } = useConversion();
  const [currency, setCurrency] = useState(false);
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
  const { presentCurrency, setPresentCurrency, products, setProducts, setCurSymbol, hotItems, setHotItems, newArrivals, setNewArrivals, onSales, setOnSales, latestItems, setLatestItems, wishlistItems, setWishlistItems, cartItems, setCartItems } = useContext(ToggleRegister);

  // useEffect(() => {
  //   localStorage.setItem("PRESENT_CURRENCY", JSON.stringify(presentCurrency));
  // }, [presentCurrency]);

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      if (presentCurrency === "NGN") {
        setProducts(products.map((details) => ChangeProductDollar(details)));
        setHotItems(hotItems.map((details) => ChangeProductDollar(details)));
        setNewArrivals(newArrivals.map((details) => ChangeProductDollar(details)));
        setOnSales(onSales.map((details) => ChangeProductDollar(details)));
        setLatestItems(latestItems.map((details) => ChangeProductDollar(details)));
        setWishlistItems(wishlistItems.map((details) => ChangeProductDollar(details)))
        setCartItems(cartItems.map((details) => ChangeProductDollar(details)))
      }
      setCurSymbol("$");
    } else if (presentCurrency === "USD") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      if (presentCurrency === "USD") {
        setProducts(products.map((details) => ChangeProductNaira(details)));
        setHotItems(hotItems.map((details) => ChangeProductNaira(details)));
        setNewArrivals(newArrivals.map((details) => ChangeProductNaira(details)));
        setOnSales(onSales.map((details) => ChangeProductNaira(details)));
        setLatestItems(latestItems.map((details) => ChangeProductNaira(details)));
        setWishlistItems(wishlistItems.map((details) => ChangeProductNaira(details)));
        setCartItems(cartItems.map((details) => ChangeProductNaira(details)));
      }
      setCurSymbol("₦");
    }
  }, [presentCurrency]);

  const ChangeCurrency = () => {
    setPresentCurrency(prevCurrency => prevCurrency === "NGN" ? "USD" : "NGN");
    setCurrency(false);
  };

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