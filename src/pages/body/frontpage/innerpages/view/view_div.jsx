import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ViewContext } from "./productview";
import { ToggleRegister } from "../../../../contextpage";
import ReviewDetails from "../../../otherpages/review/review_details";
import WishlistStock from "../../../../header/header_pages/wishlist_page/wishlist_stock";
import ReviewColor from "../../../otherpages/review/review_color";
import ReviewSize from "../../../otherpages/review/review_size";
import ReviewFunctions from "../../../otherpages/review/review_functions";
import ReviewProductDetails from "../../../otherpages/review/review_product_details";
import PageButtons from "../../../../components/page_buttons";

const ViewDiv = () => {
  const { setView } = useContext(ToggleRegister)
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo } = useContext(ViewContext);
  const navigate = useNavigate();

  return (
    <div id="productViewMainDiv">
      <ReviewDetails productReview={false} priceMainClass={"product-view-price"} productNameText={productNameText} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} productDesc={productDesc} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStock mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {(productDetails && productColors) && <ReviewColor productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {(productDetails && productSizes) && <ReviewSize productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} buttonFunction={() => setView(false)} />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <div id="productReviewLinkDiv">
        <PageButtons type={"text"} textClass={"product-review-link"} buttonFunction={() => {
          navigate(`/product/${productNameText}`);
          setView(false)}} text={"view product details"} />
      </div>
    </div>
  );
};

export default ViewDiv;