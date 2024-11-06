import { useContext } from "react";
import { Link } from "react-router-dom";
import { ViewContext } from "./productview";
import ReviewDetails from "../../../otherpages/review/review_details";
import WishlistStock from "../../../../header/header_pages/wishlist_page/wishlist_stock";
import ReviewColor from "../../../otherpages/review/review_color";
import ReviewSize from "../../../otherpages/review/review_size";
import ReviewFunctions from "../../../otherpages/review/review_functions";
import ReviewProductDetails from "../../../otherpages/review/review_product_details";

const ViewDiv = () => {
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo } = useContext(ViewContext);

  return (
    <div id="productViewMainDiv">
      <ReviewDetails productReview={false} productNameText={productNameText} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} productDesc={productDesc} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStock mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {(productDetails && productColors) && <ReviewColor productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {(productDetails && productSizes) && <ReviewSize productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} navPage={-1} />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <div id="productReviewLinkDiv">
        <Link id="productReviewLink" to={`/product/${productNameText}`}>VIEW PRODUCT DETAILS</Link>
      </div>
    </div>
  );
};

export default ViewDiv;