"use client";
import { GeneralProductType } from "@/types/productType";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageButtons from "../common/PageButtons";
import { CartReducer } from "@/store/reducers/CartReducer";

export default function AddToCart({ id, buttonClass, textClass, itemsArray }: { id: number; buttonClass?: string; textClass?: string; itemsArray: GeneralProductType[] }) {
  const { cartItems, setCartItems } = useNavigateContext();
  const { state, dispatch } =  CartReducer();

  const addToCartFunction = (id: number) => {
    const selectedItem = itemsArray.find((item) => item.id === id)!;
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
      const productPrice = averagePrice || (price && (cutOff ? price - (cutOff / 100) * price : price))!;

      if (wishlistStock === 0) {
        return;
      } else if (cartAmt && cartAmt > wishlistStock) {
        dispatch({ display: "NOT_ENOUGH" });
      } else {
        dispatch({ display: "ADD" });
        const newItem = { id: Date.now(), productImage, productName, productPrice, cartSize, cartColor, cartAmt, wishlistStock };
        setCartItems((prev) => [...prev, newItem]);
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
