import { useContext } from "react";
import { ReviewContext } from "./productreview";
import CartAmt from "../cart/cart_amt";
import AddToCart from "../../frontpage/innerpages/products_func/addtocart";
import AddToWishList from "../../frontpage/innerpages/products_func/addtowishlist";

const ReviewFunctions = () => {
  const {id, cartAmt, products, setProducts} = useContext(ReviewContext);

  return (
    <div id="productFunctionsReview" className="productDivs">
      <div className="productToCart">
        <CartAmt id={id} cartAmt={cartAmt} itemsArray={products} setItemsArray={setProducts} />
        <AddToCart id={id} buttonClass={"productToCartButton"} itemsArray={products} />
      </div>
      <AddToWishList id={id} showText={true} showIcon={false} />
    </div>
  );
};

export default ReviewFunctions;