import { memo, useContext, useState } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "../../utils/convertCurrency";
import { useShowPreload } from "../../hooks/useShowPreload";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HeaderCurrencyDiv = ({ className }) => {
  const [currency, setCurrency] = useState(false);
  const { presentCurrency, setPresentCurrency, setDefaultCurrency, wishlistItems, setWishlistItems, cartItems, setCartItems, curDetails } = useContext(NavigateContext);
  const { showPreload } = useShowPreload();

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
        setDefaultCurrency(true);
        setPresentCurrency("NGN");
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

export default memo(HeaderCurrencyDiv);
