import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ToggleRegister } from "../contextpage";

export const useHead = () => {
  const { setNavbar } = useContext(ToggleRegister);
  const [header, setHeader] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  let lastScrollY = 120;

  const changeHeader = () => {
    const presentScrollY = window.scrollY;
    { (presentScrollY > lastScrollY) ? setHeader(true) : setHeader(false) };
    { (presentScrollY > 120) && (lastScrollY = presentScrollY) };
    { (path === "/" && presentScrollY <= 120) ? setNavbar(false) : setNavbar(true) };
  }

  useEffect(() => {
    { (window.scrollY > 120 || path !== "/") ? setNavbar(true) : setNavbar(false)};
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, [path]);

  return { header };
}