const CartAmt = ({ id, cartAmt, itemsArray, setItemsArray }) => {
  const IncreaseCart = (id) => {
    const selectedItem = itemsArray.map(((item) => {
      if (item.id === id) {
        return { ...item, cartAmt: item.cartAmt += 1 };
      } else {
        return item;
      };
    }));
    setItemsArray(selectedItem);
  };

  const DecreaseCart = (id) => {
    if (cartAmt > 1) {
      const selectedItem = itemsArray.map(((item) => {
        if (item.id === id) {
          return { ...item, cartAmt: item.cartAmt -= 1 };
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
      <div className="productToCartInnerDiv" onClick={() => IncreaseCart(id)}>+</div>
      <div className="productToCartInnerDiv" onClick={() => DecreaseCart(id)}>-</div>
    </div>
  );
};

export default CartAmt;