import { useContext, useState, useEffect, startTransition } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { FiUser, FiSearch, FiHeart, FiShoppingBag, FiX, FiMenu } from "react-icons/fi";
import { motion, MotionConfig } from "framer-motion";

const HeaderNavigationIcons = () => {
  const { setAccount, setSearch, setWishList, setCart, toggleSideMenu, setToggleSideMenu, cartItems, wishlistItems, navbar } = useContext(NavigateContext);

  const [windowWidth, setWindowWidth] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth < 768);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth < 768));
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth < 768));
  }, []);

  const navigationIconsDetails = [
    { id: 0, IconClass: windowWidth ? FiUser : "loginText", text: windowWidth ? "" : "LOGIN", setPage: setAccount },
    { id: 1, IconClass: FiSearch, setPage: setSearch },
    { id: 2, IconClass: FiHeart, showValue: wishlistItems.length > 0, value: wishlistItems.length, setPage: setWishList },
    { id: 3, IconClass: FiShoppingBag, showValue: cartItems.length > 0, value: cartItems.reduce((sum, { cartAmt }) => sum + cartAmt, 0), setPage: setCart },
  ];

  const NavigationIcons = () => {
    return (
      <>
        {navigationIconsDetails.map(({ id, IconClass, showValue, value, setPage, text }) => {
          return (
            <li className="icons" onClick={() => startTransition(() => setPage(true))} key={id}>
              {text ? (
                <span className={IconClass}>{text}</span>
              ) : (
                <>
                  <IconClass className="iconTag" />
                  {showValue && (
                    <motion.var className="icon-values" initial={{ ...(navbar ? { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)" } : { backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 255, 255)" }) }} animate={{ ...(navbar ? { backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 255, 255)" } : { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)" }) }} transition={{ type: "tween", duration: 0.5, ease: "linear" }} key={navbar}>
                      {value}
                    </motion.var>
                  )}
                </>
              )}
            </li>
          );
        })}
      </>
    );
  };

  const HamburgerButton = ({ isOpen, toggle }) => {
    return (
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.button onClick={toggle} animate={isOpen ? "open" : "close"} id="side-menu-hamburger-button">
          <motion.div initial={{ backgroundColor: navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" }} variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["25%", "50%", "50%"] }, close: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "25%"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "25%" }} className="side-menu-hamburger-div" />
          <motion.div initial={{ backgroundColor: navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" }} variants={{ open: { rotate: ["0deg", "0deg", "-45deg"] }, close: { rotate: ["-45deg", "0deg", "0deg"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "50%" }} className="side-menu-hamburger-div" />
          <motion.div initial={{ backgroundColor: navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" }} variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["75%", "50%", "50%"] }, close: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "75%"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "75%" }} className="side-menu-hamburger-div" />
        </motion.button>
      </MotionConfig>
    );
  };

  return (
    <ul id="navIcons">
      <NavigationIcons />
      <HamburgerButton isOpen={toggleSideMenu} toggle={() => startTransition(() => setToggleSideMenu(!toggleSideMenu))} />
    </ul>
  );
};

export default HeaderNavigationIcons;
