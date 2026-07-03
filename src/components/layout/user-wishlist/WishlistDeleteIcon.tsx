"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { FaTimes } from "react-icons/fa";

export default function WishlistDeleteIcon({ id, cancelClass }: { id: number; cancelClass: string }) {
  const { wishlistItems, setWishlistItems, dispatch } = useNavigateContext();

  const removeWishlistItem = (id: number) => {
    const remainderItems = wishlistItems.filter((items) => items.id !== id);
    dispatch({ type: "REMOVE" });
    setWishlistItems(remainderItems);
    setTimeout(() => {
      dispatch({ type: "CLOSE" });
    }, 1250);
  };

  return (
    <>
      <FaTimes onClick={() => removeWishlistItem(id)} className={cancelClass} />
    </>
  )
};
