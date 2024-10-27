import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

const WishlistInfoText = () => {
  const { state } = useContext(ToggleRegister);

  if (state.showText) {
    return (
      <p id="wishlistInfoText" style={{ backgroundColor: state.textBackground }}>
        {state.defaultText}
      </p>
    );
  };
};

export default WishlistInfoText;