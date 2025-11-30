import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";

const WishlistActionText = () => {
  const { state } = useContext(NavigateContext);

  if (state.showText) {
    return (
      <p id="wishlistInfoText" style={{ backgroundColor: state.textBackground }}>
        {state.defaultText}
      </p>
    );
  };
};

export default WishlistActionText;