import { useContext } from "react";
import { ReviewContext } from "../../services/contexts/ReviewContext";
import ReviewDetails from "./ReviewDetails";
import WishlistStockAlert from "../../features/wishlist/WishlistStockAlert";
import ReviewColorDiv from "./ReviewColorDiv";
import ReviewSizeDiv from "./ReviewSizeDiv";
import ReviewFunctions from "./ReviewFunctions";
import ReviewDeliveryDiv from "./ReviewDeliveryDiv";

const ReviewSection = () => {
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productSizes, productColors, cartAmt, reviewSectionRef } = useContext(ReviewContext);

  return (
    <div id="productReviewDiv" ref={reviewSectionRef}>
      <ReviewDetails productReview={true} productNameText={productNameText} productDesc={productDesc} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStockAlert mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {(productDetails && productColors) && <ReviewColorDiv productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {(productDetails && productSizes) && <ReviewSizeDiv productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} />
      <ReviewDeliveryDiv />
    </div>
  );
};

export default ReviewSection;