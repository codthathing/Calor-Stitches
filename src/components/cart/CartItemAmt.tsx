"use client";
import { SetState, UserProductType } from "@/types/productType";

export default function CartItemAmt<T extends UserProductType>({ id, cartAmt, itemsArray, setItemsArray }: { id: number; cartAmt?: number; itemsArray: T[]; setItemsArray: SetState<T[]> }) {
  const increaseCart = (id: number) => {
    const selectedItem = itemsArray.map(((item) => {
      if (item.id === id) {
        return { ...item, cartAmt: item.cartAmt && item.cartAmt + 1 };
      } else {
        return item;
      };
    }));
    setItemsArray(selectedItem);
  };

  const decreaseCart = (id: number) => {
    if (cartAmt && cartAmt > 1) {
      const selectedItem = itemsArray.map(((item) => {
        if (item.id === id) {
          return { ...item, cartAmt: item.cartAmt && item.cartAmt - 1 };
        } else {
          return item;
        };
      }));
      setItemsArray(selectedItem);
    };
  };

  return (
    <div className="productToCartDiv">
      <div className="productToCartInnerDiv">{cartAmt}</div>
      <div className="productToCartInnerDiv" onClick={() => increaseCart(id)}>+</div>
      <div className="productToCartInnerDiv" onClick={() => decreaseCart(id)}>-</div>
    </div>
  );
};
