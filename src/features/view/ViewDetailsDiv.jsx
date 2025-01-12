import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ViewContext } from "../../services/contexts/ViewContext";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import ReviewDetails from "../../components/review/ReviewDetails";
import WishlistStockAlert from "../wishlist/WishlistStockAlert";
import ReviewColorDiv from "../../components/review/ReviewColorDiv";
import ReviewSizeDiv from "../../components/review/ReviewSizeDiv";
import ReviewFunctions from "../../components/review/ReviewFunctions";
import ReviewProductDetails from "../../components/review/ReviewProductDetails";
import PageButtons from "../../components/common/PageButtons";

const ViewDetailsDiv = () => {
  const { setView } = useContext(NavigateContext);
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo } = useContext(ViewContext);
  const navigate = useNavigate();

  return (
    <div id="productViewMainDiv">
      <ReviewDetails productReview={false} priceMainClass={"product-view-price"} productNameText={productNameText} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} productDesc={productDesc} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStockAlert mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {productDetails && productColors && <ReviewColorDiv productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {productDetails && productSizes && <ReviewSizeDiv productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} buttonFunction={() => setView(false)} />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <div id="productReviewLinkDiv">
        <PageButtons
          type={"text"}
          textClass={"product-review-link"}
          buttonFunction={() => {
            setView(false);
            navigate(`/product/${productNameText}`);
          }}
          text={"view product details"}
        />
      </div>
    </div>
  );
};

export default ViewDetailsDiv;
