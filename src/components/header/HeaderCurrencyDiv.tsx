"use client";
import { memo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "@/lib/utils/convertCurrency";
import Image from "next/image";

export default memo(function HeaderCurrencyDiv({ className }: { className: string }) {
  const [currency, setCurrency] = useState<boolean>(false);
  const { showPreload, presentCurrency, setPresentCurrency, setDefaultCurrency, wishlistItems, setWishlistItems, cartItems, setCartItems, curDetails } = useNavigateContext();

  const changeCurrency = () => {
    showPreload();

    setTimeout(() => {
      if (presentCurrency === "NGN") {
        setWishlistItems((prev) => changeCurrencyToDollar(prev));
        setCartItems((prev) => changeCurrencyToDollar(prev));
        setPresentCurrency("USD");
      } else if (presentCurrency === "USD") {
        setWishlistItems((prev) => changeCurrencyToNaira(prev));
        setCartItems((prev) => changeCurrencyToNaira(prev));
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
              <Image src={curDetails.curFlag} loading="lazy" width={100} height={75} alt={curDetails.curName} id="curFlag" />
              <p id="curText">{curDetails.curName}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});
