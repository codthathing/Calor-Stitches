import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";

const CartUpdateBtn = ({ setShowInfo, setInfoText }) => {
  const { cartItems } = useContext(ToggleRegister);

  const UpdateCart = () => {
    if (JSON.stringify(cartItems) !== localStorage.getItem("cartItems")) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setInfoText(["Cart updated."]);
      setTimeout(() => {
        setShowInfo(true);
      }, 2500);
    };
  };

  return (
    <div id="cartUpdateBtnDiv">
      <button id="cartUpdateBtn" onClick={UpdateCart}>UPDATE CART</button>
    </div>
  );
};

export default CartUpdateBtn;