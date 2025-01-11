import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useSumCartItems } from "../../hooks/useSumCartItems";
import PageButtons from "../../components/common/PageButtons";

const CartTotalMain = () => {
  const { curSymbol, cartItems } = useContext(NavigateContext);
  const { total } = useSumCartItems(cartItems);
  const navigate = useNavigate();

  return (
    <main id="cartTotalPriceMain">
      <div id="totalPriceDiv">
        <p className="totalPrice" id="totalPriceText">
          Subtotal:
        </p>
        <p className="totalPrice" id="totalPriceValue">
          {curSymbol}
          {total.toFixed(2)}
        </p>
      </div>
      <div id="cartButtonsDiv">
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"navBtn cartButtons"} buttonFunction={() => navigate("/shop/cart")} text={"view cart"} />
        <PageButtons type={"button"} buttonType={"white-button"} buttonClass={"navBtn cartButtons"} buttonFunction={() => navigate("/shop/checkout")} text={"checkout"} />
      </div>
    </main>
  );
};

export default CartTotalMain;
