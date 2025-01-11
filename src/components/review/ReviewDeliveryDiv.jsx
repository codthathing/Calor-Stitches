import { useContext } from "react";
import { ReviewContext } from "../../services/contexts/ReviewContext";
import ReviewServiceDiv from "./ReviewServiceDiv";
import ReviewPaymentDiv from "./ReviewPaymentDiv";
import ReviewProductDetails from "./ReviewProductDetails";
import NewsHandleIcons from "../news-letter/NewsHandleIcons";

const ReviewDeliveryDiv = () => {
  const { productInfo } = useContext(ReviewContext);

  return (
    <div id="productDelivery">
      <ReviewServiceDiv />
      <ReviewPaymentDiv />
      {productInfo && <ReviewProductDetails productInfo={productInfo} />}
      <NewsHandleIcons id={"productHandles"} />
    </div>
  );
};

export default ReviewDeliveryDiv;