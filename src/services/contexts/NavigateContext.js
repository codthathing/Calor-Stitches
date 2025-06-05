import { createContext, useState, useRef, useEffect } from "react";
import { mockProducts } from "../../database/mockProducts";
import useLocalStorage from "../../hooks/useLocalStorage";
import { WishlistReducer } from "../reducers/wishlistReducer";
import america_flag from "../../assets/currency-flags/america-flag.png";
import nigeria_flag from "../../assets/currency-flags/nigeria-flag.png";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "../../utils/convertCurrency";

const CURRENT_VERSION = "1.0.1";

const APP_VERSION = localStorage.getItem("APP_VERSION");
if (APP_VERSION !== CURRENT_VERSION) {
  localStorage.removeItem("wishlistItems");
  localStorage.removeItem("cartItems");
  localStorage.setItem("APP_VERSION", CURRENT_VERSION);
}

export const NavigateContext = createContext();

const NavigateProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useLocalStorage("wishlistItems", []);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const [products, setProducts] = useState(mockProducts);
  const [cloneCart, setCloneCart] = useState([]);
  const [collection, setCollection] = useState([]);
  const [presentFilterProducts, setPresentFilterProducts] = useState([]);
  const [presentCurrency, setPresentCurrency] = useLocalStorage("PRESENT_CURRENCY", "NGN");
  const [curSymbol, setCurSymbol] = useState("₦");
  const [presentRegister, setPresentRegister] = useState("LOGIN");
  const product_section = useRef(null);
  const home_section = useRef(null);
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
  const [productShipValue, setProductShipValue] = useState({ shipFee: 10000, min: 20, max: 5020, minValue: 20, maxValue: 5020 });
  const [account, setAccount] = useState(false);
  const [search, setSearch] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [view, setView] = useState(false);
  const [showPreload, setShowPreload] = useState(false);
  const { state, dispatch } = WishlistReducer();
  const [defaultCurrency, setDefaultCurrency] = useState(false);
  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      changeCurrencyToDollar([
        { array: products, setArray: setProducts },
        { array: collection, setArray: setCollection },
        { array: presentFilterProducts, setArray: setPresentFilterProducts },
      ]);
      setProductShipValue({ shipFee: productShipValue.shipFee / 1000, min: productShipValue.min / 1000, max: productShipValue.max / 1000, minValue: productShipValue.minValue / 1000, maxValue: productShipValue.maxValue / 1000 });
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      if (defaultCurrency) {
        changeCurrencyToNaira([
          { array: products, setArray: setProducts },
          { array: collection, setArray: setCollection },
          { array: presentFilterProducts, setArray: setPresentFilterProducts },
        ]);
        setProductShipValue({ shipFee: productShipValue.shipFee * 1000, min: productShipValue.min * 1000, max: productShipValue.max * 1000, minValue: productShipValue.minValue * 1000, maxValue: productShipValue.maxValue * 1000 });
      }
      setCurSymbol("₦");
    }

    return () => setDefaultCurrency(false);
  }, [presentCurrency]);

  return <NavigateContext.Provider value={{ account, setAccount, presentRegister, setDefaultCurrency, setPresentRegister, wishList, setWishList, cart, setCart, search, setSearch, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, products, setProducts, curSymbol, setCurSymbol, wishlistItems, setWishlistItems, cartItems, setCartItems, state, dispatch, curDetails, setCurDetails, productShipValue, setProductShipValue, presentCurrency, setPresentCurrency, cloneCart, setCloneCart, product_section, home_section, showPreload, setShowPreload, view, setView, collection, setCollection, presentFilterProducts, setPresentFilterProducts }}>{children}</NavigateContext.Provider>;
};

export default NavigateProvider;
