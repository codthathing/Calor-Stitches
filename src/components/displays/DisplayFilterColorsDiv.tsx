"use client";
import { useDisplayContext } from "@/store/providers/DisplayProvider";
import DisplayFilterOptionDiv from "./DisplayFilterOptionDiv";

export default function DisplayFilterColorsDiv() {
  const { changeProductsColors, productColors, setProductColors } = useDisplayContext();

  return <DisplayFilterOptionDiv filterText={"Color"} productFunction={changeProductsColors} productArray={productColors} setProductArray={setProductColors} textLengthId={"filter-color-text"} showColorDiv={true} showSecondInput={true} showColorLength={true} />;
};
