import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../../contextpage";

const AddToWishList = ({ id, showText, iconClass }) => {
  const { products, wishlistItems, setWishList, dispatch } = useContext(ToggleRegister);
  const navPage = useNavigate();

  const AddToWishListFunc = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    const { productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, cartAmt, wishlistDate, wishlistStock } = selectedItem;
    if (!wishlistItems.some(item => item.productName === selectedItem.productName)) {
      if (selectedItem.priceOne && selectedItem.priceTwo && selectedItem.averagePrice) {
        wishlistItems.push({ id: wishlistItems.length, productImage, productName, priceOne, priceTwo, averagePrice, cartAmt, wishlistDate, wishlistStock });
      } else {
        wishlistItems.push({ id: wishlistItems.length, cutOff, productImage, productName, productPrice, cartAmt, wishlistDate, wishlistStock });
      };
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      dispatch({ display: "ADD" });
    } else {
      dispatch({ display: "NOACTION" });
    };
    setTimeout(() => {
      setWishList(true);
      setTimeout(() => {
        dispatch({ display: "CLOSE" });
      }, 1250);
    }, 500);
  };

  return (
    <div className="productToWishlist" onClick={() => AddToWishListFunc(id)}>
      <i className={`fa-regular fa-heart ${iconClass}`}></i>
      {showText && <p className="productWishlistText">ADD TO WISHLIST</p>}
    </div>
  );
};

export default AddToWishList;