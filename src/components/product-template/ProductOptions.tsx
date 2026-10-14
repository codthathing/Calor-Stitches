import { GeneralProductType } from "@/types/productType";
import PageButtons from "../common/PageButtons";
import AddToCart from "./AddToCart";
import Link from "next/link";
import NavigationLink from "../common/NavigationLink";

export default function ProductOptions({ id, productDetails, productName, textClass, buttonClass, itemsArray }: { id: number, productDetails?: { cartSize?: string, cartColor?: string }, productName: string, textClass?: string, buttonClass?: string, itemsArray: GeneralProductType[] }) {  
  return (
    <>
      {productDetails ?
        <NavigationLink href={`/review/${productName}`}>
          {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"select options"} ></PageButtons>}
          {textClass && <PageButtons type={"text"} textClass={textClass} text={"select options"} />}
        </NavigationLink> :
        <AddToCart id={id} buttonClass={buttonClass} textClass={textClass} itemsArray={itemsArray} />
      }
    </>
  );
};
