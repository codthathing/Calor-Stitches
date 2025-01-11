import { useContext } from "react";
import { useHeadEffect } from "../../hooks/useHeadEffect";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";
import HeaderSideMenu from "../header/HeaderSideMenu";
import HeaderNavigationIcons from "../header/HeaderNavigationIcons";

const Header = () => {
  const { header } = useHeadEffect();
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
            <blockquote abbr="Calor Stiches" id="logoMob">
              CS
            </blockquote>
            <span id="logoDesk">Calor Stiches</span>
          </h1>
          <HeaderNavigationIcons />
        </div>
      </nav>
    </header>
  );
};

export default Header;
