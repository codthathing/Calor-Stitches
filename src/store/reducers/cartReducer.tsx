import { useReducer } from "react";

export const cartReducer = () => {
  const cartAction = (state, action) => {
    switch (action.display) {
      case "ADD":
        return "ITEM ADDED";
      case "INCREASE":
        return "ITEM INCREASED";
      case "DEFAULT":
        return "ADD TO CART";
      case "NOT_ENOUGH":
        return "NOT ENOUGH UNITS";
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartAction, "ADD TO CART");

  return { state, dispatch };
};
