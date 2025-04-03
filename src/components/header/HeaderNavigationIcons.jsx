import { useContext, useState, useEffect } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const HeaderNavigationIcons = () => {
  const { setAccount, setSearch, setWishList, setCart, toggleSideMenu, setToggleSideMenu, cartItems, wishlistItems, navbar } = useContext(NavigateContext);

  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth < 768 ? setWindowWidth(true) : setWindowWidth(false));
    return () => window.removeEventListener("resize", () => window.innerWidth < 768 ? setWindowWidth(true) : setWindowWidth(false));
  }, []);

  const navigationIconsDetails = [
    { id: 0, iconClass: windowWidth ? "fa-regular fa-user" : "loginText", text: windowWidth ? "" : "LOGIN", setPage: setAccount },
    { id: 1, iconClass: "fa-solid fa-magnifying-glass", setPage: setSearch },
    { id: 2, iconClass: "fa-regular fa-heart", showValue: wishlistItems.length > 0, value: wishlistItems.length, setPage: setWishList },
    { id: 3, iconClass: "fa-solid fa-bag-shopping", showValue: cartItems.length > 0, value: cartItems.reduce((sum, {cartAmt}) => sum + cartAmt, 0), setPage: setCart }
  ];

  const NavigationIcons = () => {
    return (
      <>
        {navigationIconsDetails.map(({ id, iconClass, showValue, value, setPage, text }) => {
          return (
            <li className="icons" key={id}>
              <i className={`${iconClass} ${text ? "" : "iconTag"}`} onClick={() => setPage(true)}>
                {text || ""}
                {showValue && <var className="icon-values" style={{backgroundColor: navbar ? "#222222" : "white", color: navbar ? "white" : "#222222"}}>{value}</var>}
              </i>
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
        <i className={`${toggleSideMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"} iconTag side-menu-icon`} onClick={() => setToggleSideMenu(!toggleSideMenu)}></i>
      </li>
    </ul>
  );
};

export default HeaderNavigationIcons;