import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const CartDeleteIcon = ({ id, cancelClass }) => {
  const { cartItems, setCartItems } = useContext(NavigateContext);

  const removeCartItem = (id) => {
    let remainderItems = cartItems.filter((items) => items.id !== id);
    setCartItems(remainderItems);
  };

  return (
    <>
      <i className={`fa-solid fa-xmark ${cancelClass}`} onClick={() => removeCartItem(id)}></i>
    </>
  );
};

export default CartDeleteIcon;