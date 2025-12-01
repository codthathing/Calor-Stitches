"use client";
import { createContext, useState, useRef, ReactNode, useContext, RefObject, ActionDispatch } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { mockProducts } from "@/lib/data/mockProducts";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { WishlistActionType, WishlistStateType } from "@/types/wishlistType";
import { useCheckCurrency } from "@/hooks/useCheckCurrency";
import { CartProductType, GeneralProductType, WishlistProductType, SetState } from "@/types/productType";

const CURRENT_VERSION = "1.0.1";

const APP_VERSION = localStorage.getItem("APP_VERSION");
if (APP_VERSION !== CURRENT_VERSION) {
  localStorage.removeItem("wishlistItems");
  localStorage.removeItem("cartItems");
  localStorage.setItem("APP_VERSION", CURRENT_VERSION);
}

interface NavigateInterface {
  wishlistItems: WishlistProductType[];
  setWishlistItems: SetState<WishlistProductType[]>;
  cartItems: CartProductType[];
  setCartItems: SetState<CartProductType[]>;
  products: GeneralProductType[];
  setProducts: SetState<GeneralProductType[]>;
  cloneCart: object[];
  setCloneCart: SetState<object[]>;
  collection: GeneralProductType[];
  setCollection: SetState<GeneralProductType[]>;
  presentFilterProducts: GeneralProductType[];
  setPresentFilterProducts: SetState<GeneralProductType[]>;

  presentCurrency: string;
  setPresentCurrency: SetState<string>;
  curSymbol: string;
  setCurSymbol: SetState<string>;
  presentAuthView: "LOGIN" | "SIGNUP" | "FORGOTPASSWORD";
  setPresentAuthView: SetState<"LOGIN" | "SIGNUP" | "FORGOTPASSWORD">;

  product_section: RefObject<HTMLElement | null>;
  home_section: RefObject<HTMLElement | null>;

  curDetails: { preNation: string; preCur: string; curFlag: string; curName: string };
  setCurDetails: SetState<{ preNation: string; preCur: string; curFlag: string; curName: string }>;
  productShipValue: { shipFee: number; min: number; max: number; minValue: number; maxValue: number };
  setProductShipValue: SetState<{ shipFee: number; min: number; max: number; minValue: number; maxValue: number }>;

  account: boolean;
  setAccount: SetState<boolean>;
  search: boolean;
  setSearch: SetState<boolean>;
  wishList: boolean;
  setWishList: SetState<boolean>;
  cart: boolean;
  setCart: SetState<boolean>;
  toggleSideMenu: boolean;
  setToggleSideMenu: SetState<boolean>;
  navbar: boolean;
  setNavbar: SetState<boolean>;
  view: boolean;
  setView: SetState<boolean>;
  showPreload: boolean;
  setShowPreload: SetState<boolean>;
  defaultCurrency: boolean;
  setDefaultCurrency: SetState<boolean>;

  state: WishlistStateType;
  dispatch: ActionDispatch<[action: WishlistActionType]>;
}

const NavigateContext = createContext<NavigateInterface | null>(null);

export default function NavigateProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useLocalStorage<WishlistProductType[]>("wishlistItems", []);
  const [cartItems, setCartItems] = useLocalStorage<CartProductType[]>("cartItems", []);
  const [products, setProducts] = useState<GeneralProductType[]>(mockProducts);
  const [cloneCart, setCloneCart] = useState<object[]>([]);
  const [collection, setCollection] = useState<GeneralProductType[]>([]);
  const [presentFilterProducts, setPresentFilterProducts] = useState<GeneralProductType[]>([]);
  const [presentCurrency, setPresentCurrency] = useLocalStorage<string>("PRESENT_CURRENCY", "NGN");
  const [curSymbol, setCurSymbol] = useState<string>("₦");
  const [presentAuthView, setPresentAuthView] = useState<"LOGIN" | "SIGNUP" | "FORGOTPASSWORD">("LOGIN");
  const product_section = useRef<HTMLElement | null>(null);
  const home_section = useRef<HTMLElement | null>(null);
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: "/assets/currency-flags/america-flag.png", curName: "USD $" });
  const [productShipValue, setProductShipValue] = useState({ shipFee: 10000, min: 20, max: 5020, minValue: 20, maxValue: 5020 });
  const [account, setAccount] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [wishList, setWishList] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);
  const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [showPreload, setShowPreload] = useState<boolean>(false);
  const { state, dispatch } = wishlistReducer();
  const [defaultCurrency, setDefaultCurrency] = useState<boolean>(false);
  useCheckCurrency();

  return <NavigateContext.Provider value={{ account, setAccount, presentAuthView, defaultCurrency, setDefaultCurrency, setPresentAuthView, wishList, setWishList, cart, setCart, search, setSearch, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, products, setProducts, curSymbol, setCurSymbol, wishlistItems, setWishlistItems, cartItems, setCartItems, state, dispatch, curDetails, setCurDetails, productShipValue, setProductShipValue, presentCurrency, setPresentCurrency, cloneCart, setCloneCart, product_section, home_section, showPreload, setShowPreload, view, setView, collection, setCollection, presentFilterProducts, setPresentFilterProducts }}>{children}</NavigateContext.Provider>;
}

export const useNavigateContext = () => {
  const context = useContext(NavigateContext);
  if (!context) throw new Error("Make sure this component exists in the NavigateProvider tree");

  return context;
};
