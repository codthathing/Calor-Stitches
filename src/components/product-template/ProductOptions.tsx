"use client";
import { GeneralProductType } from "@/types/productType";
import PageButtons from "../common/PageButtons";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import AddToCart from "./AddToCart";

const ProductOptions = ({ id, productDetails, productName, textClass, buttonClass, itemsArray }: { id: number, productDetails?: { cartSize?: string, cartColor?: string }, productName: string, textClass?: string, buttonClass?: string, itemsArray: GeneralProductType[] }) => {
  const navigate = useNavigateToPage();
  
  return (
    <>
      {productDetails ?
        <div onClick={() => navigate(`/review/${productName}`)}>
          {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"select options"} ></PageButtons>}
          {textClass && <PageButtons type={"text"} textClass={textClass} text={"select options"} />}
        </div> :
        <AddToCart id={id} buttonClass={buttonClass} textClass={textClass} itemsArray={itemsArray} />
      }
    </>
  );
};

export default ProductOptions;