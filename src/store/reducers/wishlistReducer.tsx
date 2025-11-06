import { useReducer } from "react";

export const WishlistReducer = () => {
  const wishlistAction = (state, action) => {
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
    defaultText: "",
  };
  const [state, dispatch] = useReducer(wishlistAction, wishlistTextStyle);

  return { state, dispatch };
};
