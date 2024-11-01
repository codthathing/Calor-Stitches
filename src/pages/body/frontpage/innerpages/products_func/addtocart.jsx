import { useContext, useEffect, useReducer } from "react";
import { ToggleRegister } from "../../../../contextpage";

const changeText = (state, action) => {
  switch (action.display) {
    case "ADD":
      return "ITEM ADDED";
    case "INCREASE":
      return "ITEM INCREASED";
    case "DEFAULT":
      return "ADD TO CART";
  };
};

const AddToCart = ({ id, buttonClass, textClass, itemsArray }) => {
  const { cartItems, setCartItems } = useContext(ToggleRegister);
  const [state, dispatch] = useReducer(changeText, "ADD TO CART");

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const AddToCartFunc = (id) => {
    const selectedItem = itemsArray.find((item) => item.id === id);
    const { productImage, productName, cutOff, productPrice: price, averagePrice, cartAmt } = selectedItem;
    const cartSize = selectedItem?.productDetails?.cartSize;
    const cartColor = selectedItem?.productDetails?.cartColor;

    const updatedCart = cartItems.map((items) => {
      const { productName: productNameText, cartSize: size, cartColor: color } = items;

      if (productNameText === productName && size === cartSize && color === cartColor) {
        dispatch({ display: "INCREASE" });
        return { ...items, cartAmt: items.cartAmt + 1 };
      } else {
        return items;
      };
    });

    if (!updatedCart.some((item) => item.productName === productName && item?.cartSize === cartSize && item?.cartColor === cartColor)) {
      dispatch({ display: "ADD" });
      const productPrice = averagePrice || (cutOff ? (price - ((cutOff / 100) * price)) : price);
      const newItem = { id: Date.now(), productImage, productName, productPrice, cartSize, cartColor, cartAmt };
      setCartItems([...updatedCart, newItem]);
    } else {
      setCartItems(updatedCart);
    };

    setTimeout(() => {
      dispatch({ display: "DEFAULT" });
    }, 1250);
  }

  return (
    <>
      {buttonClass && <button type="button" onClick={() => AddToCartFunc(id)} className={buttonClass}>{state}</button>}
      {textClass && <p onClick={() => AddToCartFunc(id)} className={textClass}>{state}</p>}
    </>
  );
};

export default AddToCart;