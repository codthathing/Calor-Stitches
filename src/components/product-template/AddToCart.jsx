import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { CartReducer } from "../../services/reducers/cartReducer";
import PageButtons from "../common/PageButtons";

const AddToCart = ({ id, buttonClass, textClass, itemsArray }) => {
  const { cartItems, setCartItems } = useContext(NavigateContext);
  const { state, dispatch } = CartReducer();

  const addToCartFunction = (id) => {
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
      const productPrice = averagePrice || (cutOff ? price - (cutOff / 100) * price : price);

      if (wishlistStock === 0) {
        return;
      } else if (cartAmt > wishlistStock) {
        dispatch({ display: "NOT_ENOUGH" });
      } else {
        dispatch({ display: "ADD" });
        let newItem = { id: Date.now(), productImage, productName, productPrice, cartSize, cartColor, cartAmt, wishlistStock };
        setCartItems([...cartItems, newItem]);
      }
    }

    setTimeout(() => {
      dispatch({ display: "DEFAULT" });
    }, 1250);
  };

  return (
    <>
      {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} buttonFunction={() => addToCartFunction(id)} text={state} />}
      {textClass && <PageButtons type={"text"} textClass={textClass} buttonFunction={() => addToCartFunction(id)} text={state} />}
    </>
  );
};

export default AddToCart;
