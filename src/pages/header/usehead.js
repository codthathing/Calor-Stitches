import { useState, useEffect, useContext } from "react";
import { ToggleRegister } from "../contextpage";

export const useHead = () => {
  const { navbar, setNavbar } = useContext(ToggleRegister);
  const [header, setHeader] = useState(false);

  const path = window.location.pathname;
  let lastScrollY = 120;

  const changeHeader = () => {
    const presentScrollY = window.scrollY;
    {(presentScrollY > lastScrollY) ? setHeader(true) : setHeader(false)};
    {(presentScrollY > 120) && (lastScrollY = presentScrollY)};
    {path === "/" && presentScrollY <= 120 ? setNavbar(false) : setNavbar(true)};
  }

  useEffect(() => {
    {(window.scrollY <= 120 && path !== "/") && setNavbar(true)};
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, [path])

  return { header, navbar };
}