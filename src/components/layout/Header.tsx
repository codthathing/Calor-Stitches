import { useContext, useEffect, useRef, memo } from "react";
import { useLocation } from "react-router-dom";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { NavigateContext } from "../../store/providers/NavigateProvider";
import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";
import HeaderSideMenu from "../header/HeaderSideMenu";
import HeaderNavigationIcons from "../header/HeaderNavigationIcons";
import { motion, AnimatePresence } from "framer-motion";

const HeaderNav = memo(({ navbar, mount }) => {
  return (
    <motion.nav key={navbar} initial={mount && !navbar ? { ...(navbar ? { color: "rgb(255, 255, 255)", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" } : { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)", backdropFilter: "none" }) } : false} animate={{ ...(navbar ? { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)", backdropFilter: "none" } : { color: "rgb(255, 255, 255)", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" }) }} transition={{ type: "tween", duration: 0.35, ease: "linear" }} id="logoIcon">
      <h1 id="logo">
        <span id="logoMob">CS</span>
        <span id="logoDesk">Calor Stitches</span>
      </h1>
      <HeaderNavigationIcons mount={mount} />
    </motion.nav>
  );
});

const Header = () => {
  const { header } = useScrollEffect();
  const { toggleSideMenu, navbar, setToggleSideMenu } = useContext(NavigateContext);
  const location = useLocation().pathname;
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
    setToggleSideMenu(false);

    return () => (hasMounted.current = false);
  }, [location]);

  return (
    <AnimatePresence>
      {!header && (
        <motion.header initial={hasMounted.current ? { y: -150 } : false} animate={{ y: 0 }} exit={{ y: -150 }} transition={{ type: "tween", duration: 0.35, ease: "linear", when: "beforeChildren" }} id="header">
          <div id="curLangHead">
            <p id="curLangOuterText">Delivery time 2-3 working days</p>
            <HeaderCurrencyDiv className={"display-currency-top"} />
          </div>
          <HeaderNav navbar={navbar} mount={hasMounted.current} />
          <AnimatePresence>{toggleSideMenu && <HeaderSideMenu />}</AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default memo(Header);
