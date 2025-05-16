import { useContext } from "react";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";
import HeaderSideMenu from "../header/HeaderSideMenu";
import HeaderNavigationIcons from "../header/HeaderNavigationIcons";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { header } = useScrollEffect();
  const { toggleSideMenu, navbar } = useContext(NavigateContext);

  return (
    <AnimatePresence>
      {!header && (
        <motion.header initial={{ y: -150 }} animate={{ y: 0 }} exit={{ y: -150 }} transition={{ type: "tween", duration: 0.5, ease: "linear", when: "beforeChildren" }} id="header">
          <div id="curLangHead">
            <p id="curLangOuterText">Delivery time 2-3 working days</p>
            <HeaderCurrencyDiv className={"display-currency-top"} />
          </div>
          <nav id="headerNav">
            <AnimatePresence>{toggleSideMenu && <HeaderSideMenu />}</AnimatePresence>
            <motion.div initial={{ ...(navbar ? { color: "white", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" } : { backgroundColor: "white", color: "#222222", backdropFilter: "none" }) }} animate={{ ...(navbar ? { backgroundColor: "white", color: "#222222", backdropFilter: "none" } : { color: "white", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" }) }} transition={{ type: "tween", duration: 0.5, ease: "linear" }} key={navbar} id="logoIcon">
              <h1 id="logo">
                <blockquote cite="https://calor-stitches.vercel.app" title="Calor Stitches" id="logoMob"></blockquote>
                <span id="logoDesk">Calor Stitches</span>
              </h1>
              <HeaderNavigationIcons />
            </motion.div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
