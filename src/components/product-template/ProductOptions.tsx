"use client";
import { GeneralProductType } from "@/types/productType";
import PageButtons from "../common/PageButtons";
import AddToCart from "./AddToCart";
import { useRouter } from "next/navigation";

export default function ProductOptions({ id, productDetails, productName, textClass, buttonClass, itemsArray }: { id: number, productDetails?: { cartSize?: string, cartColor?: string }, productName: string, textClass?: string, buttonClass?: string, itemsArray: GeneralProductType[] }) {
  const router = useRouter();
  
  return (
    <>
      {productDetails ?
        <div onClick={() => router.push(`/review/${productName}`)}>
          {buttonClass && <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"select options"} ></PageButtons>}
          {textClass && <PageButtons type={"text"} textClass={textClass} text={"select options"} />}
        </div> :
        <AddToCart id={id} buttonClass={buttonClass} textClass={textClass} itemsArray={itemsArray} />
      }
    </>
  );
};
