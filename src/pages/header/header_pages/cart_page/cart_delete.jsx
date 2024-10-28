import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

const CartDelete = ({ id, cancelClass }) => {
  const { cartItems, setCartItems } = useContext(ToggleRegister);

  const RemoveCartItem = (id) => {
    let remainderItems = cartItems.filter((items) => items.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(remainderItems));
    setCartItems(remainderItems);
  };

  return (
    <>
      <i className={`fa-solid fa-xmark ${cancelClass}`} onClick={() => RemoveCartItem(id)}></i>
    </>
  );
};

export default CartDelete;