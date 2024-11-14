import { Link } from "react-router-dom";
import PageButtons from "../../../../components/page_buttons";
import AddToCart from "./addtocart";

const ProductOptions = ({ id, productDetails, productName, textClass, buttonClass, itemsArray }) => {
  return (
    <>
      {productDetails ?
        <Link to={`/product/${productName}`} style={{ textDecoration: "none" }}>
          {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"select options"} ></PageButtons>}
          {textClass && <PageButtons type={"text"} textClass={textClass} text={"select options"} />}
        </Link> :
        <AddToCart id={id} buttonClass={buttonClass} textClass={textClass} itemsArray={itemsArray} />
      }
    </>
  );
};

export default ProductOptions;