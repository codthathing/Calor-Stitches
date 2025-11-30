import { GeneralProductType, SetState } from "@/types/productType";

const CartItemAmt = ({ id, cartAmt, itemsArray, setItemsArray }: { id: number; cartAmt?: number; itemsArray: GeneralProductType[]; setItemsArray: SetState<GeneralProductType[]> }) => {
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

export default CartItemAmt;