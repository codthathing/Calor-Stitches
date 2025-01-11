import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import SignInLayout from "../../features/(sign-in)/SignInLayout";

const HeaderNavigationIcons = () => {
  const { account, setAccount, search, setSearch, wishList, setWishList, cart, setCart, toggleSideMenu, setToggleSideMenu, cartItems, wishlistItems, navbar } = useContext(NavigateContext);

  const navigationIconsDetails = [
    { id: 0, iconId: "userIcon", iconClass: "fa-regular fa-user", setPage: setAccount, page: account, pageLayout: <SignInLayout /> },
    { id: 1, iconId: "", iconClass: "fa-solid fa-magnifying-glass", setPage: setSearch, page: search },
    { id: 2, iconId: "", iconClass: "fa-regular fa-heart", showValue: wishlistItems.length > 0, value: wishlistItems.length, setPage: setWishList, page: wishList },
    { id: 3, iconId: "", iconClass: "fa-solid fa-bag-shopping", showValue: cartItems.length > 0, value: cartItems.reduce((sum, {cartAmt}) => sum + cartAmt, 0), setPage: setCart, page: cart }
  ];

  const NavigationIcons = () => {
    return (
      <>
        {navigationIconsDetails.map(({ id, iconId, iconClass, showValue, value, setPage, page, pageLayout }) => {
          return (
            <li className="icons" key={id}>
              <i id={`${iconId}`} className={`${iconClass} iconTag`} onClick={() => setPage(true)}>
                {showValue && <var className="icon-values" style={{backgroundColor: navbar ? "#222222" : "white", color: navbar ? "white" : "#222222"}}>{value}</var>}
              </i>
              {page && pageLayout}
            </li>
          )
        })}
      </>
    );
  };

  return (
    <ul id="navIcons">
      <li className="icons"><p onClick={() => setAccount(true)} id="loginText">LOGIN</p></li>
      <NavigationIcons />
      <li className="icons">
        <i className={toggleSideMenu ? "fa-solid fa-xmark iconTag" : "fa-solid fa-bars iconTag"} onClick={() => setToggleSideMenu(!toggleSideMenu)}></i>
      </li>
    </ul>
  );
};

export default HeaderNavigationIcons;