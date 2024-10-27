import { useContext } from "react";
import { ToggleRegister } from "../../contextpage";
import AccountLayout from "../header_pages/account_pages/account_layout";
import Search from "../header_pages/search/search";
import WishList from "../header_pages/wishlist_page/wishlist";
import Cart from "../header_pages/cart_page/cart"

const NavIcons = () => {
  const { account, setAccount, search, setSearch, wishList, setWishList, cart, setCart, toggleSideMenu, setToggleSideMenu } = useContext(ToggleRegister);

  const linkIconsDet = [
    { id: 0, iconId: "userIcon", iconClass: "fa-regular fa-user", setPage: setAccount, page: account, pageLayout: <AccountLayout /> },
    { id: 1, iconId: "", iconClass: "fa-solid fa-magnifying-glass", setPage: setSearch, page: search, pageLayout: <Search /> },
    { id: 2, iconId: "", iconClass: "fa-regular fa-heart", setPage: setWishList, page: wishList, pageLayout: <WishList /> },
    { id: 3, iconId: "", iconClass: "fa-solid fa-bag-shopping", setPage: setCart, page: cart, pageLayout: <Cart /> }
  ];
  const LinksIcon = () => {
    return (
      <>
        {linkIconsDet.map(({ id, iconId, iconClass, setPage, page, pageLayout }) => {
          return (
            <li className="icons" key={id}>
              <i id={`${iconId}`} className={`${iconClass} iconTag`} onClick={() => setPage(true)}></i>
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
      <LinksIcon/>
      <li className="icons">
        <i className={toggleSideMenu ? "fa-solid fa-xmark iconTag" : "fa-solid fa-bars iconTag"} onClick={() => setToggleSideMenu(!toggleSideMenu)}></i>
      </li>
    </ul>
  );
};

export default NavIcons;