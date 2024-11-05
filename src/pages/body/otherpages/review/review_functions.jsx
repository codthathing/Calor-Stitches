import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import CartAmt from "../cart/cart_amt";
import AddToCart from "../../frontpage/innerpages/products_func/addtocart";
import AddToWishList from "../../frontpage/innerpages/products_func/addtowishlist";

const ReviewFunctions = ({id, cartAmt, navPage}) => {
  const { products, setProducts } = useContext(ToggleRegister);
  const navigate = useNavigate();

  return (
    <div id="productFunctionsReview" className="productDivs">
      <div className="productToCart">
        <CartAmt id={id} cartAmt={cartAmt} itemsArray={products} setItemsArray={setProducts} />
        <AddToCart id={id} buttonClass={"productToCartButton"} itemsArray={products} />
      </div>
      <span onClick={() => navigate(navPage)}><AddToWishList id={id} showText={true} showIcon={false} /></span>
    </div>
  );
};

export default ReviewFunctions;