import { createContext, useReducer, useState } from "react";
import { productDetails } from "./body/frontpage/innerpages/products";
import useLocalStorage from "./components/local_storage";
import { hotitems } from "./body/frontpage/innerpages/hotitems";
import { newarrivals } from "./body/frontpage/innerpages/newarrivals";
import { onsales } from "./body/frontpage/innerpages/onsale";
import america_flag from "../asset/images-icons/currencyFlags/america-flag.png";

const CURRENT_VERSION = '1.0.1';

const APP_VERSION = localStorage.getItem('APP_VERSION');
if (APP_VERSION !== CURRENT_VERSION) {
  localStorage.removeItem('wishlistItems');
  localStorage.removeItem('cartItems');
  localStorage.setItem('APP_VERSION', CURRENT_VERSION);
}

export const ToggleRegister = createContext();
export const OptNavProvider = ({ children }) => {
  const [account, setAccount] = useState(false);
  const [search, setSearch] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [wishlistItems, setWishlistItems] = useLocalStorage("wishlistItems", []);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const [cloneCart, setCloneCart] = useState([]);
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [presentRegister, setPresentRegister] = useState("LOGIN");
  const [products, setProducts] = useState(productDetails);
  const [presentCurrency, setPresentCurrency] = useLocalStorage("PRESENT_CURRENCY", "NGN");
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
  const [productShipValue, setProductShipValue] = useState({shipFee: 10000, min: 20, max: 5020, minValue: 20, maxValue: 5020});
  const [hotItems, setHotItems] = useState(hotitems);
  const [newArrivals, setNewArrivals] = useState(newarrivals);
  const [onSales, setOnSales] = useState(onsales);
  const [latestItems, setLatestItems] = useState(hotItems);
  const [curSymbol, setCurSymbol] = useState("₦");
  const changeStyles = (state, action) => {
    if (action.display === "ADD") {
      return { ...state, showText: true, textBackground: "#00A849", defaultText: "Item added to Wishlist" };
    } else if (action.display === "NOACTION") {
      return { ...state, showText: true, textBackground: "#FF421D", defaultText: "Item present in Wishlist" };
    } else if (action.display === "REMOVE") {
      return { ...state, showText: true, textBackground: "#C2272D", defaultText: "Item removed from wishlist" };
    } else if (action.display === "CLOSE") {
      return { ...state, showText: false, textBackground: "", defaultText: "" };
    }
  };
  const wishlistTextStyle = {
    showText: false,
    textBackground: "",
    defaultText: ""
  };
  const [state, dispatch] = useReducer(changeStyles, wishlistTextStyle);

  return (
    <ToggleRegister.Provider value={{ account, setAccount, presentRegister, setPresentRegister, wishList, setWishList, cart, setCart, search, setSearch, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, products, setProducts, curSymbol, setCurSymbol, hotItems, setHotItems, newArrivals, setNewArrivals, onSales, setOnSales, wishlistItems, setWishlistItems, cartItems, setCartItems, state, dispatch, latestItems, setLatestItems, curDetails, setCurDetails, productShipValue, setProductShipValue, presentCurrency, setPresentCurrency, cloneCart, setCloneCart }}>
      {children}
    </ToggleRegister.Provider>
  );
}