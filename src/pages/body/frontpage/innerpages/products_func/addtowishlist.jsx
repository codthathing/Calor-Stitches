import { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../../../contextpage";

const AddToWishList = ({ id, showText, showIcon }) => {
  const { products, wishlistItems, setWishlistItems, setWishList, dispatch } = useContext(ToggleRegister);
  const [showWishlistText, setShowWishlistText] = useState(false);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const AddToWishListFunc = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    const { productImage, productName, cartAmt, wishlistDate, wishlistStock } = selectedItem;
    const [cutOff, productPrice, averagePrice, priceOne, priceTwo] = [selectedItem?.cutOff, selectedItem?.productPrice, selectedItem?.averagePrice, selectedItem?.priceOne, selectedItem?.priceTwo];

    if (!wishlistItems.some(item => item.productName === selectedItem.productName)) {
      const newWishlist = { id: Date.now(), productImage, productName, cutOff, productPrice, averagePrice, priceOne, priceTwo, cartAmt, wishlistDate, wishlistStock };
      setWishlistItems([...wishlistItems, newWishlist]);
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
    <div onClick={() => AddToWishListFunc(id)}>
      <>
        {showIcon && <i onMouseEnter={() => setShowWishlistText(true)} onMouseLeave={() => setShowWishlistText(false)} onClick={() => setShowWishlistText(false)} className="fa-regular fa-heart optionIcon optioIconWishlist"></i>}
        {showWishlistText && <p className="optionText wishlistOptionText">Add to Wishlist</p>}
      </>
      {showText && <div className="productToWishlist">
        <i className="fa-regular fa-heart productWishlistIcon"></i>
        <p className="productWishlistText">ADD TO WISHLIST</p>
      </div>}
    </div>
  );
};

export default AddToWishList;