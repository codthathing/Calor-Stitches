import { useContext } from "react";
import { ReviewContext } from "./productreview";
import ReviewService from "./review_service";
import ReviewPayment from "./review_payment";
import ReviewProductDetails from "./review_product_details";
import Handle from "../../../news_section/handle";

const ReviewDelivery = () => {
  const { productInfo } = useContext(ReviewContext);

  return (
    <div id="productDelivery">
      <ReviewService />
      <ReviewPayment />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <Handle id={"productHandles"} />
    </div>
  );
};

export default ReviewDelivery;