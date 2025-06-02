import { useState, useEffect, useContext, memo } from "react";
import { useLocation } from "react-router-dom";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { scrollToSection } from "../utils/scrollToSection";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const PageScrollToTop = memo(({ showIcon }) => {
  const { home_section } = useContext(NavigateContext);

  return (
    <AnimatePresence>
      {showIcon && (
        <motion.div id="page-top-div" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ type: "tween", duration: 0.35, ease: "linear" }} onClick={() => scrollToSection(home_section)}>
          <FaArrowUp className="page-top-icon" />
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export const useScrollEffect = () => {
  const { setNavbar, setToggleSideMenu } = useContext(NavigateContext);
  const [header, setHeader] = useState(false);
  const [showNavToTop, setShowNavToTop] = useState(false);

  const path = useLocation().pathname;

  useEffect(() => {
    if (window.scrollY > 120 || path.includes("/product") || path.includes("/shop") || path.includes("/pages") || path.includes("/blog")) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [window.scrollY, path]);

  useEffect(() => {
    let lastScrollY = 120;

    const changeHeader = () => {
      const presentScrollY = window.scrollY;
      if (presentScrollY > lastScrollY) {
        setHeader(true);
        setToggleSideMenu(false);
      } else {
        setHeader(false);
      }

      if (presentScrollY < lastScrollY && presentScrollY >= 120 && path === "/") {
        setShowNavToTop(true);
      } else {
        setShowNavToTop(false);
      }

      if (presentScrollY > 120) lastScrollY = presentScrollY;

      if (path === "/" && presentScrollY <= 120) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    };

    window.addEventListener("scroll", changeHeader);
    return () => window.removeEventListener("scroll", changeHeader);
  }, [path]);

  return { header, showNavToTop };
};
