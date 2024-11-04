import { useContext } from "react";
import { ReviewContext } from "./productreview";
import ReviewDetails from "./review_details";
import WishlistStock from "../../../header/header_pages/wishlist_page/wishlist_stock";
import ReviewColor from "./review_color";
import ReviewSize from "./review_size";
import ReviewFunctions from "./review_functions";
import ReviewDelivery from "./review_delivery";

const ReviewDiv = () => {
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productSizes, productColors } = useContext(ReviewContext);

  return (
    <div id="productReviewDiv">
      <ReviewDetails productReview={true} productNameText={productNameText} productDesc={productDesc} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStock mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {(productDetails && productColors) && <ReviewColor productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {(productDetails && productSizes) && <ReviewSize productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions />
      <ReviewDelivery />
    </div>
  );
};

export default ReviewDiv;