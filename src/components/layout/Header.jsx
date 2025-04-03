import { useContext } from "react";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";
import HeaderSideMenu from "../header/HeaderSideMenu";
import HeaderNavigationIcons from "../header/HeaderNavigationIcons";

const Header = () => {
  const { header } = useScrollEffect();
  const { toggleSideMenu, navbar } = useContext(NavigateContext);

  return (
    <header id="header" className={header ? "scrollTop" : ""}>
      <div id="curLangHead">
        <p id="curLangOuterText">Delivery time 2-3 working days</p>
        <HeaderCurrencyDiv className={"display-currency-top"} />
      </div>
      <nav id="headerNav">
        {toggleSideMenu && <HeaderSideMenu />}
        <div id="logoIcon" className={navbar ? "scrollDownNavbar" : ""}>
          <h1 id="logo">
            <blockquote cite="https://calor-stitches.vercel.app" title="Calor Stitches" id="logoMob">CS</blockquote>
            <span id="logoDesk">Calor Stitches</span>
          </h1>
          <HeaderNavigationIcons />
        </div>
      </nav>
    </header>
  );
};

export default Header;
