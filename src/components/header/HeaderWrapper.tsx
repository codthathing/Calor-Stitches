"use client";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import HeaderNavigationIcons from "./HeaderNavigationIcons";
import { usePreviousPath } from "@/hooks/usePreviousPath";

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  const { setToggleSideMenu, navbar, hasMounted } = useNavigateContext();
  const { header } = useScrollEffect();
  const shouldBeTransparent = (usePreviousPath() === "/") && (typeof window !== "undefined" && window.scrollY <= 120);

  return (
    <AnimatePresence onExitComplete={() => setToggleSideMenu(false)}>
      {!header && (
        <motion.header initial={hasMounted.current && { y: -150 }} animate={{ y: 0 }} exit={{ y: -150 }} transition={{ type: "tween", duration: 0.35, ease: "linear", when: "afterChildren" }} id="header">
          {children}
          <motion.nav initial={hasMounted.current && { ...(shouldBeTransparent ? { color: "rgb(255, 255, 255)", backdropFilter: "blur(2.5px)", backgroundColor: "rgba(255,255,255,0)" } : { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)", backdropFilter: "none" }) }} animate={{ ...(navbar ? { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)", backdropFilter: "none" } : { color: "rgb(255, 255, 255)", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" }) }} transition={{ type: "tween", duration: 0.35, ease: "linear" }} id="logoIcon">
            <h1 id="logo">
              <span id="logoMob">CS</span>
              <span id="logoDesk">Calor Stitches</span>
            </h1>
            <HeaderNavigationIcons />
          </motion.nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
