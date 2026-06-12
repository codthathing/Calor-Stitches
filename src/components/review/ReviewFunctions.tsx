import AddToWishList from "../product-template/AddToWishlist";
import ReviewFunctionsDiv from "../layout/review-page/ReviewFunctionsDiv";

export default function ReviewFunctions({ id, cartAmt }: { id: number; cartAmt?: number }) {
  return (
    <div id="productFunctionsReview" className="productDivs">
      <ReviewFunctionsDiv id={id} cartAmt={cartAmt} />
      <AddToWishList id={id} showText={true} showIcon={false} />
    </div>
  );
}
