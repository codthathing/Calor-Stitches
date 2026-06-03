"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export const useScrollEffect = () => {
  const { setNavbar, hasMounted } = useNavigateContext();
  const [header, setHeader] = useState<boolean>(false);
  const [showNavToTop, setShowNavToTop] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    hasMounted.current = true;
    window.scrollTo({ top: 0, behavior: "instant" });

    let lastScrollY = 120;

    if (window.scrollY > 120 || path === "/product" || path ==="/wishlist" || path === "/cart" || path === "/checkout" || path === "/payment" || path === "/displays" || path.includes("/review") || path.includes("/collection") || path.includes("/blog") || path.includes("/posts")) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    const changeHeader = () => {
      const presentScrollY = window.scrollY;
      if (presentScrollY > lastScrollY) {
        setHeader(true);
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
      hasMounted.current = false;
    };
  }, [path]);

  return { header, showNavToTop };
};
