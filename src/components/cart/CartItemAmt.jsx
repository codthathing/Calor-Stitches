const CartItemAmt = ({ id, cartAmt, itemsArray, setItemsArray }) => {
  const increaseCart = (id) => {
    const selectedItem = itemsArray.map(((item) => {
      if (item.id === id) {
        return { ...item, cartAmt: item.cartAmt + 1 };
      } else {
        return item;
      };
    }));
    setItemsArray(selectedItem);
  };

  const decreaseCart = (id) => {
    if (cartAmt > 1) {
      const selectedItem = itemsArray.map(((item) => {
        if (item.id === id) {
          return { ...item, cartAmt: item.cartAmt - 1 };
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