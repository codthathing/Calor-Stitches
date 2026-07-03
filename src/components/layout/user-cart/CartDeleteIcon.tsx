"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { FaTimes } from "react-icons/fa";

export default function CartDeleteIcon({ id, cancelClass }: { id: number; cancelClass: string }) {
  const { cartItems, setCartItems } = useNavigateContext();

  const removeCartItem = (id: number) => {
    const remainderItems = cartItems.filter((items) => items.id !== id);
    setCartItems(remainderItems);
  };

  return (
    <>
      <FaTimes onClick={() => removeCartItem(id)} className={cancelClass} />
    </>
  );
};
