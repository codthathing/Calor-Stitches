import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateContext";
import { FaTimes } from "react-icons/fa";

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
      <FaTimes onClick={() => removeWishlistItem(id)} className={cancelClass} />
    </>
  )
};

export default WishlistDeleteIcon;