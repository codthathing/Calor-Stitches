import { useContext, useReducer } from "react";
import { ToggleRegister } from "../../../../contextpage";
import PageButtons from "../../../../components/page_buttons";

const changeText = (state, action) => {
  switch (action.display) {
    case "ADD":
      return "ITEM ADDED";
    case "INCREASE":
      return "ITEM INCREASED";
    case "DEFAULT":
      return "ADD TO CART";
    case "NOT_ENOUGH":
      return "NOT ENOUGH UNITS";
    default:
      return state;
  };
};

const AddToCart = ({ id, buttonClass, textClass, itemsArray }) => {
  const { cartItems, setCartItems } = useContext(ToggleRegister);
  const [state, dispatch] = useReducer(changeText, "ADD TO CART");

  const AddToCartFunc = (id) => {
    const selectedItem = itemsArray.find((item) => item.id === id);
    const { productImage, productName, cutOff, productPrice: price, averagePrice, cartAmt, wishlistStock } = selectedItem;
    const cartSize = selectedItem?.productDetails?.cartSize;
    const cartColor = selectedItem?.productDetails?.cartColor;

    if (cartItems.some((item) => item.productName === productName && item?.cartSize === cartSize && item?.cartColor === cartColor)) {
      const updatedCart = cartItems.map((item) => {
        const { productName: productNameText, cartSize: size, cartColor: color, cartAmt, wishlistStock } = item;
        if (productNameText === productName && size === cartSize && color === cartColor) {
          if (cartAmt >= wishlistStock) {
            dispatch({ display: "NOT_ENOUGH" });
          } else {
            dispatch({ display: "INCREASE" });
            return { ...item, cartAmt: cartAmt + 1 };
          }
        }
        return item;
      });

      setCartItems(updatedCart);
    } else {
      const productPrice = averagePrice || (cutOff ? (price - ((cutOff / 100) * price)) : price);

      if (wishlistStock === 0) {
        return;
      } else if (cartAmt > wishlistStock) {
        dispatch({ display: "NOT_ENOUGH" });
      } else {
        dispatch({ display: "ADD" });
        let newItem = { id: Date.now(), productImage, productName, productPrice, cartSize, cartColor, cartAmt, wishlistStock };
        setCartItems([...cartItems, newItem]);
      };
    };

    setTimeout(() => {
      dispatch({ display: "DEFAULT" });
    }, 1250);
  }

  return (
    <>
      {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} buttonFunction={() => AddToCartFunc(id)} text={state} />}
      {textClass && <PageButtons type={"text"} textClass={textClass} buttonFunction={() => AddToCartFunc(id)} text={state} />}
    </>
  );
};

export default AddToCart;