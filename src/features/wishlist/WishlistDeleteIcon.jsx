import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const WishlistDeleteIcon = ({ id, cancelClass }) => {
  const { wishlistItems, setWishlistItems, dispatch } = useContext(NavigateContext);

  const removeWishlistItem = (id) => {
    let remainderItems = wishlistItems.filter((items) => items.id !== id);
    dispatch({ display: "REMOVE" });
    setWishlistItems(remainderItems);
    setTimeout(() => {
      dispatch({ display: "CLOSE" });
    }, 1250);
  };

  return (
    <>
      <i onClick={() => removeWishlistItem(id)} className={`fa-solid fa-xmark ${cancelClass}`}></i>
    </>
  )
};

export default WishlistDeleteIcon;