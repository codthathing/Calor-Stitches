"use client";
import { startTransition } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { motion, MotionConfig } from "framer-motion";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { IconType } from "react-icons";
import PageModalLink from "../layout/PageModalLinks";

const NavigationIcons = () => {
  const { cartItems, wishlistItems, navbar, hasMounted } = useNavigateContext();

  const navigationIconsDetails: { id: number; Icon?: IconType; text?: string; listId?: string; listIconId?: string; value?: number; showValue?: boolean; pageLink: string }[] = [
    { id: 0, Icon: FiUser, listId: "mobile-login-icon", pageLink: "/auth/login" },
    { id: 1, text: "LOGIN", listIconId: "loginText", listId: "desktop-login-icon", pageLink: "/auth/login" },
    { id: 2, Icon: FiSearch, pageLink: "/search" },
    { id: 3, Icon: FiHeart, showValue: hasMounted && wishlistItems.length > 0, value: wishlistItems.length, pageLink: "/user/wishlist" },
    { id: 4, Icon: FiShoppingBag, showValue: hasMounted && cartItems.length > 0, value: cartItems.reduce((sum, { cartAmt }) => sum + cartAmt, 0), pageLink: "/user/cart" },
  ];

  return (
    <>
      {navigationIconsDetails.map(({ id, Icon, listId, listIconId, showValue, value, pageLink, text }) => {
        return (
          <PageModalLink href={pageLink} prefetch={false} className="icons" id={listId} key={id} scroll={false} style={{ textDecoration: "none", color: "inherit" }}>
            {text && <span id={listIconId}>{text}</span>}
            {Icon && (
              <>
                <Icon className="iconTag" />
                {showValue && (
                  <motion.var className="icon-values" initial={hasMounted && !navbar && { ...(navbar ? { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)" } : { backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 255, 255)" }) }} animate={{ ...(navbar ? { backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 255, 255)" } : { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)" }) }} transition={{ type: "tween", duration: 0.35, ease: "linear" }}>
                    {value}
                  </motion.var>
                )}
              </>
            )}
          </PageModalLink>
        );
      })}
    </>
  );
};

const HamburgerButton = () => {
  const { navbar, toggleSideMenu, setToggleSideMenu } = useNavigateContext();

  const toggle = () => startTransition(() => setToggleSideMenu((prevState) => !prevState));

  const color = navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";

  return (
    <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
      <motion.button onClick={toggle} initial={false} animate={toggleSideMenu ? "open" : "close"} id="side-menu-hamburger-button">
        <motion.div variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["25%", "50%", "50%"], backgroundColor: color }, close: { rotate: "0deg", top: "25%", backgroundColor: color } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "25%" }} className="side-menu-hamburger-div" />
        <motion.div variants={{ open: { rotate: ["0deg", "0deg", "-45deg"], backgroundColor: color }, close: { rotate: "0deg", backgroundColor: color } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "50%" }} className="side-menu-hamburger-div" />
        <motion.div variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["75%", "50%", "50%"], backgroundColor: color }, close: { rotate: "0deg", top: "75%", backgroundColor: color } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "75%" }} className="side-menu-hamburger-div" />
      </motion.button>
    </MotionConfig>
  );
};

export default function HeaderNavigationIcons() {
  return (
    <nav id="navIcons">
      <NavigationIcons />
      <HamburgerButton />
    </nav>
  );
};
