"use client";
import WishlistStockAlert from "@/components/layout/user-wishlist/WishlistStockAlert";
import PageButtons from "@/components/common/PageButtons";
import ReviewColorDiv from "@/components/review/ReviewColorDiv";
import ReviewDetails from "@/components/review/ReviewDetails";
import ReviewFunctions from "@/components/review/ReviewFunctions";
import ReviewProductDetails from "@/components/review/ReviewProductDetails";
import ReviewSizeDiv from "@/components/review/ReviewSizeDiv";
import { usePreviewContext } from "@/store/providers/PreviewProvider";
import { useRouter } from "next/navigation";

export default function PreviewDetailsDiv() {
  const { id, productName, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo } = usePreviewContext();
  const router = useRouter();

  return (
    <div id="productViewMainDiv">
      <ReviewDetails productReview={false} priceMainClass={"product-view-price"} productName={productName} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} productDesc={productDesc} />
      {(wishlistStock || wishlistStock === 0) && <WishlistStockAlert mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
      {productDetails && productColors && <ReviewColorDiv productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
      {productDetails && productSizes && <ReviewSizeDiv productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
      <ReviewFunctions id={id} cartAmt={cartAmt} />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <div id="productReviewLinkDiv">
        <PageButtons type={"text"} textClass={"product-review-link"} text={"view product details"} buttonFunction={() => router.replace(`/review/${productName}`)}/>
      </div>
    </div>
  );
};
