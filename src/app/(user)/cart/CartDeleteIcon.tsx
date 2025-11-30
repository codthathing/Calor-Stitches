import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import { FaTimes } from "react-icons/fa";

const CartDeleteIcon = ({ id, cancelClass }) => {
  const { cartItems, setCartItems } = useContext(NavigateContext);

  const removeCartItem = (id) => {
    let remainderItems = cartItems.filter((items) => items.id !== id);
    setCartItems(remainderItems);
  };

  return (
    <>
      <FaTimes onClick={() => removeCartItem(id)} className={cancelClass} />
    </>
  );
};

export default CartDeleteIcon;