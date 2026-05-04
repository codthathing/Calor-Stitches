"use client";
import { SetState } from "@/types/productType";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContext {
  city: string;
  setCity: SetState<string>;
  showCartInfo: boolean;
  setShowCartInfo: SetState<boolean>;
  cartInfoArray: string[];
  setCartInfoArray: SetState<string[]>;
}

const CartContext = createContext<CartContext | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<string>("address");
  const [showCartInfo, setShowCartInfo] = useState<boolean>(false);
  const [cartInfoArray, setCartInfoArray] = useState<string[]>([]);

  return <CartContext.Provider value={{ city, setCity, showCartInfo, setShowCartInfo, cartInfoArray, setCartInfoArray }}>{children}</CartContext.Provider>;
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if(!context) throw new Error("Make sure this component exists in the CartProvider tree");

  return context;
}