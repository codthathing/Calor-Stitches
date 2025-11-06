import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import CartItemAmt from "../cart/CartItemAmt";
import AddToCart from "../product-template/AddToCart";
import AddToWishList from "../product-template/AddToWishlist";

const ReviewFunctions = ({id, cartAmt, buttonFunction}) => {
  const { products, setProducts } = useContext(NavigateContext);

  return (
    <div id="productFunctionsReview" className="productDivs">
      <div className="productToCart">
        <CartItemAmt id={id} cartAmt={cartAmt} itemsArray={products} setItemsArray={setProducts} />
        <AddToCart id={id} buttonClass={"productToCartButton"} itemsArray={products} />
      </div>
      <span onClick={buttonFunction}><AddToWishList id={id} showText={true} showIcon={false} /></span>
    </div>
  );
};

export default ReviewFunctions;