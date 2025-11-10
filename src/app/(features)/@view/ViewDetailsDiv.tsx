import { useContext } from "react";
import { ViewContext } from "../../../store/providers/ViewContext";
import { NavigateContext } from "../../../store/providers/NavigateContext";
import ReviewDetails from "../../(main)/review/ReviewDetails";
import WishlistStockAlert from "../@wishlist/WishlistStockAlert";
import ReviewColorDiv from "../../(main)/review/ReviewColorDiv";
import ReviewSizeDiv from "../../(main)/review/ReviewSizeDiv";
import ReviewFunctions from "../../(main)/review/ReviewFunctions";
import ReviewProductDetails from "../../(main)/review/ReviewProductDetails";
import PageButtons from "../../common/PageButtons";
import { useNavigateToPage } from "../../../hooks/useNavigateToPage";

const ViewDetailsDiv = () => {
  const { setView } = useContext(NavigateContext);
  const { id, productNameText, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo } = useContext(ViewContext);
  const navigate = useNavigateToPage();

  return (
    <div id="productViewMainDiv">
      <ReviewDetails productReview={false} priceMainClass={"product-view-price"} productNameText={productNameText} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} productDesc={productDesc} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStockAlert mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {productDetails && productColors && <ReviewColorDiv productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {productDetails && productSizes && <ReviewSizeDiv productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} buttonFunction={() => setView(false)} />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <div id="productReviewLinkDiv">
        <PageButtons type={"text"} textClass={"product-review-link"} text={"view product details"}
          buttonFunction={() => {
            setView(false);
            navigate(`/product/${productNameText}`);
          }}
        />
      </div>
    </div>
  );
};

export default ViewDetailsDiv;
