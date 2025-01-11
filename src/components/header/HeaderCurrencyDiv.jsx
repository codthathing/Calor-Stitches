import { useContext, useEffect, useState } from "react";
import nigeria_flag from "../../assets/currency-flags/nigeria-flag.png";
import america_flag from "../../assets/currency-flags/america-flag.png";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "../../utils/convertCurrency";
import { ShowPreload } from "../../utils/showPreload";

const HeaderCurrencyDiv = ({ className }) => {
  const [currency, setCurrency] = useState(false);
  const { presentCurrency, setPresentCurrency, setCurSymbol, productShipValue, setProductShipValue, products, setProducts, wishlistItems, setWishlistItems, cartItems, setCartItems, curDetails, setCurDetails } = useContext(NavigateContext);
  const [defaultCurrency, setDefaultCurrency] = useState(false);

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      changeCurrencyToDollar([{ array: products, setArray: setProducts }]);
      setProductShipValue({ shipFee: productShipValue.shipFee / 1000, min: productShipValue.min / 1000, max: productShipValue.max / 1000, minValue: productShipValue.minValue / 1000, maxValue: productShipValue.maxValue / 1000 });
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      if (defaultCurrency) {
        changeCurrencyToNaira([{ array: products, setArray: setProducts }]);
        setProductShipValue({ shipFee: productShipValue.shipFee * 1000, min: productShipValue.min * 1000, max: productShipValue.max * 1000, minValue: productShipValue.minValue * 1000, maxValue: productShipValue.maxValue * 1000 });
      }
      setCurSymbol("₦");
    }
  }, [presentCurrency]);

  const changeCurrency = () => {
    ShowPreload();
    setTimeout(() => {
      if (presentCurrency === "NGN") {
        changeCurrencyToDollar([
          { array: wishlistItems, setArray: setWishlistItems },
          { array: cartItems, setArray: setCartItems },
        ]);
        setPresentCurrency("USD");
      } else if (presentCurrency === "USD") {
        changeCurrencyToNaira([
          { array: wishlistItems, setArray: setWishlistItems },
          { array: cartItems, setArray: setCartItems },
        ]);
        setPresentCurrency("NGN");
        setDefaultCurrency(true);
      }
    }, 2000);
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
        {currency && (
          <div onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} onClick={changeCurrency} className={`display-currency ${className}`}>
            <img src={curDetails.curFlag} alt={curDetails.curName} id="curFlag" />
            <p id="curText">{curDetails.curName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderCurrencyDiv;
