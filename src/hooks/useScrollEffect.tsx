"use client";
import { useState, useEffect, memo } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { scrollToSection } from "@/lib/utils/scrollToSection";

export const PageScrollToTop = memo(({ showIcon }: { showIcon: boolean }) => {
  const { home_section } = useNavigateContext();

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
  const { setNavbar, setToggleSideMenu } = useNavigateContext();
  const [header, setHeader] = useState<boolean>(false);
  const [showNavToTop, setShowNavToTop] = useState<boolean>(false);

  const path = usePathname();

  useEffect(() => {
    if (window.scrollY > 120 || path === "/product" || path ==="/wishlist" || path === "/cart" || path === "/checkout" || path === "/payment" || path === "/displays" || path.includes("/review") || path.includes("/collection") || path.includes("/blog") || path.includes("/posts")) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [path]);

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
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, [path]);

  return { header, showNavToTop };
};
