"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiHeart } from 'react-icons/fi';

export default function AddToWishList({ id, showText, showIcon }: { id: number, showText: boolean, showIcon: boolean }) {
  const { products, wishlistItems, setWishlistItems, dispatch, wishlistStartTransition } = useNavigateContext();
  const [showWishlistText, setShowWishlistText] = useState<boolean>(false);
  const pathname = usePathname();

  const addToWishlistFunction = (id: number) => {
    const selectedItem = products.find((item) => item.id === id)!;
    const { productImage, productName, cartAmt, wishlistDate, wishlistStock } = selectedItem;
    const [cutOff, productPrice, averagePrice, priceOne, priceTwo, productDetails] = [selectedItem?.cutOff, selectedItem?.productPrice, selectedItem?.averagePrice, selectedItem?.priceOne, selectedItem?.priceTwo, selectedItem?.productDetails];

    if (!wishlistItems.some(item => item.productName === selectedItem.productName)) {
      let newWishlist = { id: Date.now(), productImage, productName, cartAmt, ...(averagePrice && { averagePrice, priceOne, priceTwo }), ...(cutOff && { cutOff }), ...(productPrice && { productPrice }), wishlistDate, wishlistStock, productDetails };
      setWishlistItems([...wishlistItems, newWishlist]);
      dispatch({ type: "ADD" });
    } else {
      dispatch({ type: "NOACTION" });
    };

    wishlistStartTransition("/user/wishlist", pathname === "/product-preview", pathname);
  };

  return (
    <div onClick={() => addToWishlistFunction(id)}>
      <>
        {showIcon && <FiHeart onMouseEnter={() => setShowWishlistText(true)} onMouseLeave={() => setShowWishlistText(false)} onClick={() => setShowWishlistText(false)} className="optionIcon optioIconWishlist" /> }
        {showWishlistText && <p className="optionText wishlistOptionText">Add to Wishlist</p>}
      </>
      {showText && <div className="productToWishlist">
        <FiHeart className="productWishlistIcon" />
        <p className="productWishlistText">ADD TO WISHLIST</p>
      </div>}
    </div>
  );
};
