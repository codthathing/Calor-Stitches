import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../../contextpage";

const AddToWishList = ({ id, showText, showIcon }) => {
  const { products, wishlistItems, setWishList, dispatch } = useContext(ToggleRegister);
  const [showWishlistText, setShowWishlistText] = useState(false);
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
      setShowWishlistText(false);
      setTimeout(() => {
        dispatch({ display: "CLOSE" });
      }, 1250);
    }, 500);
  };

  return (
    <div onClick={() => AddToWishListFunc(id)}>
      {showIcon && <i className="fa-regular fa-heart optionIcon optioIconWishlist"
        onMouseEnter={() => setShowWishlistText(true)}
        onMouseLeave={() => setShowWishlistText(false)}></i>}
      {showWishlistText && <p className="optionText wishlistOptionText">Add to Wishlist</p>}
      {showText &&
        <div className="productToWishlist" onClick={() => navPage(-1)}>
          <i className="fa-regular fa-heart productWishlistIcon"></i>
          <p className="productWishlistText">ADD TO WISHLIST</p>
        </div>
      }
    </div>
  );
};

export default AddToWishList;