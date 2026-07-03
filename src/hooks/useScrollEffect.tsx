"use client";
import { useState, useEffect } from "react";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { usePreviousPath } from "./usePreviousPath";

export const useScrollEffect = () => {
  const { setNavbar, setHasMounted } = useNavigateContext();
  const [header, setHeader] = useState<boolean>(false);
  const [showNavToTop, setShowNavToTop] = useState<boolean>(false);
  const path = usePreviousPath();

  useEffect(() => {
    setHasMounted(true);
    window.scrollTo({ top: 0, behavior: "instant" });
    
    let lastScrollY = 120;

    if (window.scrollY > 120 || path === "/products" || path === "/wishlist" || path === "/cart" || path === "/checkout" || path === "/payment" || path === "/displays" || path === "/confirm" || path === "/admin" || path.includes("/review") || path.includes("/collection") || path.includes("/blog") || path.includes("/posts")) setNavbar(true);
    else setNavbar(false);

    const changeHeader = () => {
      const presentScrollY = window.scrollY;
      if (presentScrollY > lastScrollY) setHeader(true);
      else setHeader(false);

      if (presentScrollY < lastScrollY && presentScrollY >= 120 && path === "/") setShowNavToTop(true);
      else setShowNavToTop(false);

      if (presentScrollY > 120) lastScrollY = presentScrollY;

      if (path === "/" && presentScrollY <= 120) setNavbar(false);
      else setNavbar(true);
    };

    window.addEventListener("scroll", changeHeader);

    return () => {
      window.removeEventListener("scroll", changeHeader);
      setHasMounted(false);
    };
  }, [path, setHasMounted, setNavbar]);

  return { header, showNavToTop };
};
