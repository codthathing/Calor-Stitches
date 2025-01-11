import { useContext, useState } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const AddToWishList = ({ id, showText, showIcon }) => {
  const { products, wishlistItems, setWishlistItems, setWishList, dispatch } = useContext(NavigateContext);
  const [showWishlistText, setShowWishlistText] = useState(false);

  const addToWishlistFunction = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    const { productImage, productName, cartAmt, wishlistDate, wishlistStock } = selectedItem;
    const [cutOff, productPrice, averagePrice, priceOne, priceTwo, productDetails] = [selectedItem?.cutOff, selectedItem?.productPrice, selectedItem?.averagePrice, selectedItem?.priceOne, selectedItem?.priceTwo, selectedItem?.productDetails];

    if (!wishlistItems.some(item => item.productName === selectedItem.productName)) {
      let newWishlist = { id: Date.now(), productImage, productName, cartAmt, ...(averagePrice && { averagePrice, priceOne, priceTwo }), ...(cutOff && { cutOff }), ...(productPrice && { productPrice }), wishlistDate, wishlistStock, productDetails };
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
    <div onClick={() => addToWishlistFunction(id)}>
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