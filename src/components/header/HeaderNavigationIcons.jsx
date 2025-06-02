import { useContext, startTransition, memo, useCallback } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { FiUser, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { motion, MotionConfig } from "framer-motion";

const NavigationIcons = memo(({ mount }) => {
  const { setAccount, setSearch, setWishList, setCart, cartItems, wishlistItems, navbar } = useContext(NavigateContext);

  const navigationIconsDetails = [
    { id: 0, Icon: FiUser, listId: "mobile-login-icon", setPage: setAccount },
    { id: 1, text: "LOGIN", listIconId: "loginText", listId: "desktop-login-icon", setPage: setAccount },
    { id: 2, Icon: FiSearch, setPage: setSearch },
    { id: 3, Icon: FiHeart, showValue: wishlistItems.length > 0, value: wishlistItems.length, setPage: setWishList },
    { id: 4, Icon: FiShoppingBag, showValue: cartItems.length > 0, value: cartItems.reduce((sum, { cartAmt }) => sum + cartAmt, 0), setPage: setCart },
  ];

  return (
    <>
      {navigationIconsDetails.map(({ id, Icon, listId, listIconId, showValue, value, setPage, text }) => {
        return (
          <li className="icons" id={listId} onClick={() => startTransition(() => setPage(true))} key={id}>
            {text ? (
              <span id={listIconId}>{text}</span>
            ) : (
              <>
                <Icon className="iconTag" />
                {showValue && (
                  <motion.var className="icon-values" initial={mount && !navbar ? { ...(navbar ? { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)" } : { backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 255, 255)" }) } : false} animate={{ ...(navbar ? { backgroundColor: "rgb(34, 34, 34)", color: "rgb(255, 255, 255)" } : { backgroundColor: "rgb(255, 255, 255)", color: "rgb(34, 34, 34)" }) }} transition={{ type: "tween", duration: 0.35, ease: "linear" }}>
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
});

const HamburgerButton = memo(({ isOpen, toggle }) => {
  const { navbar } = useContext(NavigateContext);

  return (
    <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
      <motion.button onClick={toggle} initial={false} animate={isOpen ? "open" : "close"} id="side-menu-hamburger-button">
        <motion.div initial={{ backgroundColor: navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" }} variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["25%", "50%", "50%"] }, close: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "25%"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "25%" }} className="side-menu-hamburger-div" />
        <motion.div initial={{ backgroundColor: navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" }} variants={{ open: { rotate: ["0deg", "0deg", "-45deg"] }, close: { rotate: ["-45deg", "0deg", "0deg"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "50%" }} className="side-menu-hamburger-div" />
        <motion.div initial={{ backgroundColor: navbar ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" }} variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["75%", "50%", "50%"] }, close: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "75%"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "75%" }} className="side-menu-hamburger-div" />
      </motion.button>
    </MotionConfig>
  );
});

const HeaderNavigationIcons = ({ mount }) => {
  const { toggleSideMenu, setToggleSideMenu } = useContext(NavigateContext);

  const toggle = useCallback(() => startTransition(() => setToggleSideMenu((prevState) => !prevState)), []);

  return (
    <ul id="navIcons">
      <NavigationIcons mount={mount} />
      <HamburgerButton isOpen={toggleSideMenu} toggle={toggle} />
    </ul>
  );
};

export default HeaderNavigationIcons;
