"use client";
import { createContext, useState, useRef, ReactNode, useContext, RefObject, ActionDispatch } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { WishlistActionType, WishlistStateType } from "@/types/wishlistType";
import { CartProductType, GeneralProductType, WishlistProductType, SetState } from "@/types/productType";
import { useCheckAppVersion } from "@/hooks/useCheckAppVersion";
import { useShowPreload } from "@/hooks/useShowPreload";
import { WishlistReducer } from "../reducers/WishlistReducer";
import { BlogType } from "@/types/blogType";

interface NavigateInterface {
  wishlistItems: WishlistProductType[];
  setWishlistItems: SetState<WishlistProductType[]>;
  cartItems: CartProductType[];
  setCartItems: SetState<CartProductType[]>;
  products: GeneralProductType[];
  setProducts: SetState<GeneralProductType[]>;
  posts: BlogType[];
  setPosts: SetState<BlogType[]>;
  cloneCart: CartProductType[];
  setCloneCart: SetState<CartProductType[]>;

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
  defaultCurrency: boolean;
  setDefaultCurrency: SetState<boolean>;
  hasMounted: boolean;
  setHasMounted: SetState<boolean>;

  state: WishlistStateType;
  dispatch: ActionDispatch<[action: WishlistActionType]>;

  preload: boolean;
  showPreload: () => void;
  navigateToPage: (page: string) => void;
  wishlistStartTransition: (page: string, replace: boolean, currentPath: string) => void;
}

const NavigateContext = createContext<NavigateInterface | null>(null);

export default function NavigateProvider({ children, initialDetails }: { children: ReactNode; initialDetails: {products: GeneralProductType[]; posts: BlogType[]} }) {
  const [wishlistItems, setWishlistItems] = useLocalStorage<WishlistProductType[]>("wishlistItems", []);
  const [cartItems, setCartItems] = useLocalStorage<CartProductType[]>("cartItems", []);
  const [cloneCart, setCloneCart] = useState<CartProductType[]>([]);
  const [products, setProducts] = useState<GeneralProductType[]>(initialDetails.products);
  const [posts, setPosts] = useState<BlogType[]>(initialDetails.posts);
  const [presentCurrency, setPresentCurrency] = useLocalStorage<string>("PRESENT_CURRENCY", "NGN");
  const [curSymbol, setCurSymbol] = useState<string>("₦");
  const product_section = useRef<HTMLElement | null>(null);
  const home_section = useRef<HTMLElement | null>(null);
  const [userDetails, setUserDetails] = useState({ userImage: "/assets/user-profile.png", userName: "John Doe", userEmail: "johndoe@gmail.com" });
  const [curDetails, setCurDetails] = useState({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: "/assets/currency-flags/america-flag.png", curName: "USD $" });
  const [productShipValue, setProductShipValue] = useState({ shipFee: 10000, min: 20, max: 5020, minValue: 20, maxValue: 5020 });
  const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);
  const { state, dispatch } = WishlistReducer();
  const [defaultCurrency, setDefaultCurrency] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { preload, showPreload, navigateToPage, wishlistStartTransition } = useShowPreload(dispatch);
  useCheckAppVersion();

  return <NavigateContext.Provider value={{ userDetails, setUserDetails, posts, setPosts, defaultCurrency, setDefaultCurrency, toggleSideMenu, setToggleSideMenu, navbar, setNavbar, products, setProducts, curSymbol, setCurSymbol, wishlistItems, setWishlistItems, cartItems, setCartItems, state, dispatch, wishlistStartTransition, curDetails, setCurDetails, productShipValue, setProductShipValue, presentCurrency, setPresentCurrency, cloneCart, setCloneCart, product_section, home_section, preload, hasMounted, setHasMounted, showPreload, navigateToPage }}>{children}</NavigateContext.Provider>;
}

export const useNavigateContext = () => {
  const context = useContext(NavigateContext);
  if (!context) throw new Error("Make sure this component exists in the NavigateProvider tree");

  return context;
};
