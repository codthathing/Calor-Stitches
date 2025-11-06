import PageButtons from "../common/PageButtons";
import AddToCart from "./AddToCart";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const ProductOptions = ({ id, productDetails, productName, textClass, buttonClass, itemsArray }) => {
  const navigate = useNavigateToPage();
  
  return (
    <>
      {productDetails ?
        <div onClick={() => navigate(`/product/${productName}`)}>
          {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"select options"} ></PageButtons>}
          {textClass && <PageButtons type={"text"} textClass={textClass} text={"select options"} />}
        </div> :
        <AddToCart id={id} buttonClass={buttonClass} textClass={textClass} itemsArray={itemsArray} />
      }
    </>
  );
};

export default ProductOptions;