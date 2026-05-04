import ReviewServiceDiv from "./ReviewServiceDiv";
import ReviewPaymentDiv from "./ReviewPaymentDiv";
import NewsHandleIcons from "../news-letter/NewsHandleIcons";
import ReviewProductDetailsWrapper from "./ReviewProductDetailsWrapper";

export default function ReviewDeliveryDiv() {
  return (
    <div id="productDelivery">
      <ReviewServiceDiv />
      <ReviewPaymentDiv />
      <ReviewProductDetailsWrapper />
      <NewsHandleIcons id={"productHandles"} />
    </div>
  );
};
