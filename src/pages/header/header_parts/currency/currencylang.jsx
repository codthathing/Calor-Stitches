import { useContext, useEffect, useState } from "react";
import nigeria_flag from "../../../../asset/images-icons/currencyFlags/nigeria-flag.png";
import america_flag from "../../../../asset/images-icons/currencyFlags/america-flag.png";
import { ToggleRegister } from "../../../contextpage";
import { useConversion } from "./conversion";

const CurLangTemplate = ({ className }) => {
  const { ChangeProductDollar, ChangeProductNaira } = useConversion();
  const [currency, setCurrency] = useState(false);
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
  const { setCurSymbol, products, setProducts, wishlistItems, setWishlistItems, cartItems, setCartItems } = useContext(ToggleRegister);
  const [defaultCurrency, setDefaultCurrency] = useState(false);
  const [presentCurrency, setPresentCurrency] = useState(JSON.parse(localStorage.getItem("PRESENT_CURRENCY")) || "NGN");

  useEffect(() => {
    localStorage.setItem("PRESENT_CURRENCY", JSON.stringify(presentCurrency));
  }, [presentCurrency]);

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      ChangeProductDollar([{ array: products, setArray: setProducts }]);
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      { defaultCurrency && ChangeProductNaira([{ array: products, setArray: setProducts }]) };
      setCurSymbol("₦");
    }
  }, [presentCurrency]);

  const ChangeCurrency = () => {
    if (presentCurrency === "NGN") {
      ChangeProductDollar([{ array: wishlistItems, setArray: setWishlistItems }, { array: cartItems, setArray: setCartItems }]);
      setPresentCurrency("USD");
    } else if (presentCurrency === "USD") {
      ChangeProductNaira([{ array: wishlistItems, setArray: setWishlistItems }, { array: cartItems, setArray: setCartItems }]);
      setPresentCurrency("NGN");
      setDefaultCurrency(true);
    };
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