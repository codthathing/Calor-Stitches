import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ToggleRegister } from "../contextpage";
import { useScrollToSection } from "../components/use_show_section";

export const useHead = () => {
  const { setNavbar, home_section } = useContext(ToggleRegister);
  const [header, setHeader] = useState(false);
  const [showNavToTop, setShowNavToTop] = useState(false);
  const { scrollToSection } = useScrollToSection(home_section);

  const location = useLocation();
  const path = location.pathname;
  let lastScrollY = 120;

  const changeHeader = () => {
    const presentScrollY = window.scrollY;
    { (presentScrollY > lastScrollY) ? setHeader(true) : setHeader(false) };
    { ((presentScrollY < lastScrollY) && presentScrollY >= 120 && path === "/") ? setShowNavToTop(true) : setShowNavToTop(false) };
    { (presentScrollY > 120) && (lastScrollY = presentScrollY) };
    { (path === "/" && presentScrollY <= 120) ? setNavbar(false) : setNavbar(true) };
  }

  useEffect(() => {
    { (window.scrollY > 120 || path.includes("/product") || path.includes("/shop") || path.includes("/pages") || path.includes("/blog")) ? setNavbar(true) : setNavbar(false) };
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, [path]);

  const PageToTop = () => {
    if(showNavToTop) {
      return (
        <div id="page-top-div" onClick={scrollToSection}>
          <i className="fa-solid fa-arrow-up page-top-icon"></i>
        </div>
      );
    };
  };

  return { header, PageToTop };
}