import { Link } from "react-router-dom";
import AddToCart from "./addtocart";

const ProductOptions = ({ id, productDetails, productName, textClass, buttonClass, itemsArray }) => {
  return (
    <>
      {productDetails ?
        <Link to={`/product/${productName}`} style={{ textDecoration: "none" }}>
          {buttonClass && <button type="button" className={buttonClass}>SELECT OPTIONS</button>}
          {textClass && <p className={textClass}>SLECT OPTIONS</p>}
        </Link> :
        <AddToCart id={id} buttonClass={buttonClass} textClass={textClass} itemsArray={itemsArray} />
      }
    </>
  );
};

export default ProductOptions;