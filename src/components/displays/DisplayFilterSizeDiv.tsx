"use client";
import { useDisplayContext } from "@/store/providers/DisplayProvider";
import DisplayFilterOptionDiv from "./DisplayFilterOptionDiv";

export default function DisplayFilterSizeDiv() {
  const { changeProductsSize, productSize, setProductSize } = useDisplayContext();

  return <DisplayFilterOptionDiv filterText={"Size"} productFunction={changeProductsSize} productArray={productSize} setProductArray={setProductSize} textLengthId={"filter-text-size"} showFirstInput={true} showSizeLength={true} />
};
