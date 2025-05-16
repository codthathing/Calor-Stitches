import { useContext, useEffect, useState } from "react";
import nigeria_flag from "../../assets/currency-flags/nigeria-flag.png";
import america_flag from "../../assets/currency-flags/america-flag.png";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "../../utils/convertCurrency";
import { useShowPreload } from "../../hooks/useShowPreload";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HeaderCurrencyDiv = ({ className }) => {
  const [currency, setCurrency] = useState(false);
  const { presentCurrency, setPresentCurrency, setCurSymbol, productShipValue, setProductShipValue, products, setProducts, wishlistItems, setWishlistItems, cartItems, setCartItems, curDetails, setCurDetails, collection, setCollection, presentFilterProducts, setPresentFilterProducts } = useContext(NavigateContext);
  const [defaultCurrency, setDefaultCurrency] = useState(false);
  const { showPreload } = useShowPreload();

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      changeCurrencyToDollar([
        { array: products, setArray: setProducts },
        { array: collection, setArray: setCollection },
        { array: presentFilterProducts, setArray: setPresentFilterProducts },
      ]);
      setProductShipValue({ shipFee: productShipValue.shipFee / 1000, min: productShipValue.min / 1000, max: productShipValue.max / 1000, minValue: productShipValue.minValue / 1000, maxValue: productShipValue.maxValue / 1000 });
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      if (defaultCurrency) {
        changeCurrencyToNaira([
          { array: products, setArray: setProducts },
          { array: collection, setArray: setCollection },
          { array: presentFilterProducts, setArray: setPresentFilterProducts },
        ]);
        setProductShipValue({ shipFee: productShipValue.shipFee * 1000, min: productShipValue.min * 1000, max: productShipValue.max * 1000, minValue: productShipValue.minValue * 1000, maxValue: productShipValue.maxValue * 1000 });
      }
      setCurSymbol("₦");
    }
  }, [presentCurrency]);

  const changeCurrency = () => {
    showPreload();
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
          <FaChevronDown className="curLangIcon" />
        </main>
        <AnimatePresence>
          {currency && (
            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0, transition: { delay: 0.2 } }} transition={{ type: "tween", duration: 0.35, ease: "linear" }} onMouseEnter={() => setCurrency(true)} onMouseLeave={() => setCurrency(false)} onClick={changeCurrency} className={`display-currency ${className}`}>
              <img src={curDetails.curFlag} loading="lazy" alt={curDetails.curName} id="curFlag" />
              <p id="curText">{curDetails.curName}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeaderCurrencyDiv;
