"use client";
import ReviewDetails from "./ReviewDetails";
import ReviewColorDiv from "./ReviewColorDiv";
import ReviewSizeDiv from "./ReviewSizeDiv";
import ReviewFunctions from "./ReviewFunctions";
import ReviewDeliveryDiv from "./ReviewDeliveryDiv";
import WishlistStockAlert from "../layout/user-wishlist/WishlistStockAlert";
import { useReviewContext } from "@/store/providers/ReviewProvider";

export default function ReviewSection() {
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productSizes, productColors, cartAmt, innerScrollRef } = useReviewContext();

  return (
    <div ref={innerScrollRef} id="productReviewDiv">
      <ReviewDetails productReview={true} productName={productNameText} productDesc={productDesc} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStockAlert mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {(productDetails && productColors) && <ReviewColorDiv productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {(productDetails && productSizes) && <ReviewSizeDiv productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} />
      <ReviewDeliveryDiv />
    </div>
  );
};
