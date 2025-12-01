"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function WishlistActionText() {
  const { state } = useNavigateContext();

  if (state.showText) {
    return (
      <p id="wishlistInfoText" style={{ backgroundColor: state.textBackground }}>
        {state.defaultText}
      </p>
    );
  };
};
