"use client";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import HeaderNavigationIcons from "./HeaderNavigationIcons";

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  const { setToggleSideMenu, navbar } = useNavigateContext();
  const location = usePathname();
  const { header } = useScrollEffect();
  const hasMounted = useRef<boolean>(false);

  useEffect(() => {
    hasMounted.current = true;
    setToggleSideMenu(false);

    return () => {
      hasMounted.current = false;
    };
  }, [location]);

  return (
    <AnimatePresence>
      {!header && (
        <motion.header initial={hasMounted.current ? { y: -150 } : false} animate={{ y: 0 }} exit={{ y: -150 }} transition={{ type: "tween", duration: 0.35, ease: "linear", when: "beforeChildren" }} id="header">
          {children}
          <motion.nav key={navbar ? 'open' : 'closed'} initial={hasMounted.current && !navbar ? { ...(navbar ? { color: "rgb(255, 255, 255)", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" } : { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)", backdropFilter: "none" }) } : false} animate={{ ...(navbar ? { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)", backdropFilter: "none" } : { color: "rgb(255, 255, 255)", backdropFilter: "blur(2.5px)", background: "rgba(255,255,255,0)" }) }} transition={{ type: "tween", duration: 0.35, ease: "linear" }} id="logoIcon">
            <h1 id="logo">
              <span id="logoMob">CS</span>
              <span id="logoDesk">Calor Stitches</span>
            </h1>
            <HeaderNavigationIcons mount={hasMounted.current} />
          </motion.nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
