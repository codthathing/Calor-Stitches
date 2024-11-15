import { useHead } from "./usehead"
import { ToggleRegister } from "../contextpage";
import CurLangTemplate from "./header_parts/currency/currencylang";
import Sidemenu from "./header_pages/sidemenu";
import NavIcons from "./header_parts/navIcons";
import { useContext } from "react";

const Header = () => {
  const { header } = useHead();
  const { toggleSideMenu, navbar } = useContext(ToggleRegister);

  return (
    <header id="header" className={header ? "scrollTop" : ""}>
      <div id="curLangHead">
        <p id="curLangOuterText">Delivery time 2-3 working days</p>
        <CurLangTemplate className={"display-currency-top"} />
      </div>
      <nav id="headerNav">
        {toggleSideMenu && <Sidemenu />}
        <div id="logoIcon" className={navbar ? "scrollDownNavbar" : ""}>
          <h1 id="logo">
            <blockquote abbr="Calor Stiches" id="logoMob">CS</blockquote>
            <span id="logoDesk">Calor Stiches</span>
          </h1>
          <NavIcons />
        </div>
      </nav>
    </header>
  );
};

export default Header;