import { useContext, useEffect, useState } from "react";
import nigeria_flag from "../../../../asset/images-icons/currencyFlags/nigeria-flag.png";
import america_flag from "../../../../asset/images-icons/currencyFlags/america-flag.png";
import { ToggleRegister } from "../../../contextpage";
import { useConversion } from "./conversion";

const CurLangTemplate = ({ className }) => {
  const { ChangeProductDollar, ChangeProductNaira } = useConversion();
  const [currency, setCurrency] = useState(false);
  const {presentCurrency, setPresentCurrency, setCurSymbol, productShipValue, setProductShipValue, products, setProducts, wishlistItems, setWishlistItems, cartItems, setCartItems, curDetails, setCurDetails } = useContext(ToggleRegister);
  const [defaultCurrency, setDefaultCurrency] = useState(false);

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      ChangeProductDollar([{ array: products, setArray: setProducts }]);
      setProductShipValue({shipFee: productShipValue.shipFee / 1000, min: productShipValue.min / 1000, max: productShipValue.max / 1000, minValue: productShipValue.minValue / 1000, maxValue: productShipValue.maxValue / 1000});
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      if(defaultCurrency) {
        ChangeProductNaira([{ array: products, setArray: setProducts }]);
        setProductShipValue({shipFee: productShipValue.shipFee * 1000, min: productShipValue.min * 1000, max: productShipValue.max * 1000, minValue: productShipValue.minValue * 1000, maxValue: productShipValue.maxValue * 1000});
      };
      setCurSymbol("₦");
    }
  }, [presentCurrency]);

  const ChangeCurrency = () => {
    if (presentCurrency === "NGN") {
      ChangeProductDollar([{ array: wishlistItems, setArray: setWishlistItems }, { array: cartItems, setArray: setCartItems }])
      setPresentCurrency("USD");
    } else if (presentCurrency === "USD") {
      ChangeProductNaira([{ array: wishlistItems, setArray: setWishlistItems }, { array: cartItems, setArray: setCartItems }])
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