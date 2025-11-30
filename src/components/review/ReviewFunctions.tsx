import AddToWishList from "../product-template/AddToWishlist";
import ReviewFunctionsDiv from "../layout/review-page/ReviewFunctionsDiv";

export default function ReviewFunctions({ id, cartAmt, buttonFunction }: { id: number; cartAmt?: number; buttonFunction: () => void }) {
  return (
    <div id="productFunctionsReview" className="productDivs">
      <ReviewFunctionsDiv id={id} cartAmt={cartAmt} />
      <span onClick={buttonFunction}>
        <AddToWishList id={id} showText={true} showIcon={false} />
      </span>
    </div>
  );
};
