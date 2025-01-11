import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";

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