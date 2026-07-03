"use client";
import { WishlistActionType, WishlistStateType } from "@/types/wishlistType";
import { useReducer } from "react";

export const WishlistReducer = () => {
  const wishlistAction = (state: WishlistStateType, action: WishlistActionType): WishlistStateType => {
    switch (action.type) {
      case "ADD":
        return { ...state, showText: true, textBackground: "#00A849", defaultText: "Item added to Wishlist" };
      case "NOACTION":
        return { ...state, showText: true, textBackground: "#FF421D", defaultText: "Item present in Wishlist" };
      case "REMOVE":
        return { ...state, showText: true, textBackground: "#C2272D", defaultText: "Item removed from wishlist" };
      case "CLOSE":
        return { ...state, showText: false, textBackground: "", defaultText: "" };
      default:
        return state;
    }
  };

  const wishlistTextStyle: WishlistStateType = {
    showText: false,
    textBackground: "",
    defaultText: "",
  };

  const [state, dispatch] = useReducer(wishlistAction, wishlistTextStyle);

  return { state, dispatch };
};
