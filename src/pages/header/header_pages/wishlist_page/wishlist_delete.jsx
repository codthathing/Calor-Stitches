import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

const WishlistDelete = ({ id, cancelClass }) => {
  const { wishlistItems, setWishlistItems, dispatch } = useContext(ToggleRegister);

  const RemoveWishlistItem = (id) => {
    let remainderItems = wishlistItems.filter((items) => items.id !== id);
    localStorage.setItem("wishlistItems", JSON.stringify(remainderItems));
    dispatch({ display: "REMOVE" });
    setWishlistItems(remainderItems);
    setTimeout(() => {
      dispatch({ display: "CLOSE" });
    }, 1250);
  };

  return (
    <>
      <i onClick={() => RemoveWishlistItem(id)} className={`fa-solid fa-xmark ${cancelClass}`}></i>
    </>
  )
};

export default WishlistDelete;