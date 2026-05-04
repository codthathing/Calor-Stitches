"use client";
import { createContext, useState, useRef, ReactNode, useContext, RefObject, ActionDispatch } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { mockProducts } from "@/lib/data/mockProducts";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { WishlistActionType, WishlistStateType } from "@/types/wishlistType";
import { CartProductType, GeneralProductType, WishlistProductType, SetState } from "@/types/productType";
import { useCheckAppVersion } from "@/hooks/useCheckAppVersion";

interface NavigateInterface {
  wishlistItems: WishlistProductType[];
  setWishlistItems: SetState<WishlistProductType[]>;
  cartItems: CartProductType[];
  setCartItems: SetState<CartProductType[]>;
  products: GeneralProductType[];
  setProducts: SetState<GeneralProductType[]>;
  cloneCart: CartProductType[];
  setCloneCart: SetState<CartProductType[]>;
  collection: GeneralProductType[];
  setCollection: SetState<GeneralProductType[]>;
  presentFilterProducts: GeneralProductType[];
  setPresentFilterProducts: SetState<GeneralProductType[]>;

  presentCurrency: string;
  setPresentCurrency: SetState<string>;
  curSymbol: string;
  setCurSymbol: SetState<string>;

  product_section: RefObject<HTMLElement | null>;
  home_section: RefObject<HTMLElement | null>;

  curDetails: { preNation: string; preCur: string; curFlag: string; curName: string };
  setCurDetails: SetState<{ preNation: string; preCur: string; curFlag: string; curName: string }>;
  productShipValue: { shipFee: number; min: number; max: number; minValue: number; maxValue: number };
  setProductShipValue: SetState<{ shipFee: number; min: number; max: number; minValue: number; maxValue: number }>;
  userDetails: { userImage: string, userName: string, userEmail: string };
  setUserDetails: SetState<{ userImage: string, userName: string, userEmail: string }>;

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
  const [cloneCart, setCloneCart] = useState<CartProductType[]>([]);
  const [collection, setCollection] = useState<GeneralProductType[]>([]);
  const [presentFilterProducts, setPresentFilterProducts] = useState<GeneralProductType[]>([]);
  const [presentCurrency, setPresentCurrency] = useLocalStorage<string>("PRESENT_CURRENCY", "NGN");
  const [curSymbol, setCurSymbol] = useState<string>("₦");
  const product_section = useRef<HTMLElement | null>(null);
  const home_section = useRef<HTMLElement | null>(null);
  const [userDetails, setUserDetails] = useState({ userImage: "/assets/user-profile.png", userName: "John Doe", userEmail: "johndoe@gmail.com" });
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: "/assets/currency-flags/america-flag.png", curName: "USD $" });
  const [productShipValue, setProductShipValue] = useState({ shipFee: 10000, min: 20, max: 5020, minValue: 20, maxValue: 5020 });
  const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [showPreload, setShowPreload] = useState<boolean>(false);
  const { state, dispatch } = wishlistReducer();
  const [defaultCurrency, setDefaultCurrency] = useState<boolean>(false);
  useCheckAppVersion();

  return <NavigateContext.Provider value={{ userDetails, setUserDetails, defaultCurrency, setDefaultCurrency, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, products, setProducts, curSymbol, setCurSymbol, wishlistItems, setWishlistItems, cartItems, setCartItems, state, dispatch, curDetails, setCurDetails, productShipValue, setProductShipValue, presentCurrency, setPresentCurrency, cloneCart, setCloneCart, product_section, home_section, showPreload, setShowPreload, view, setView, collection, setCollection, presentFilterProducts, setPresentFilterProducts }}>{children}</NavigateContext.Provider>;
}

export const useNavigateContext = () => {
  const context = useContext(NavigateContext);
  if (!context) throw new Error("Make sure this component exists in the NavigateProvider tree");

  return context;
};
