import { useContext, useState, useEffect } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { FiUser, FiSearch, FiHeart, FiShoppingBag, FiX, FiMenu } from "react-icons/fi";


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
    { id: 3, IconClass: FiShoppingBag, showValue: cartItems.length > 0, value: cartItems.reduce((sum, {cartAmt}) => sum + cartAmt, 0), setPage: setCart }
  ];

  const NavigationIcons = () => {
    return (
      <>
        {navigationIconsDetails.map(({ id, IconClass, showValue, value, setPage, text }) => {
          return (
            <li className="icons" onClick={() => setPage(true)} key={id}>
              { text ? <span className={IconClass}>{text}</span> : <><IconClass className="iconTag" />{showValue && <var className="icon-values" style={{backgroundColor: navbar ? "#222222" : "white", color: navbar ? "white" : "#222222"}}>{value}</var>}</> }
            </li>
          )
        })}
      </>
    );
  };

  return (
    <ul id="navIcons">
      <NavigationIcons />
      <li className="icons side-menu-icon-list">
        { toggleSideMenu ? <FiX className="side-menu-icon" onClick={() => setToggleSideMenu(false)} /> : <FiMenu className="side-menu-icon" onClick={() => setToggleSideMenu(true)} /> }
      </li>
    </ul>
  );
};

export default HeaderNavigationIcons;