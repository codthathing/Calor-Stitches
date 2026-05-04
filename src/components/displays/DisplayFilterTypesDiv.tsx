import { useDisplayContext } from "@/store/providers/DisplayProvider";
import DisplayFilterOptionDiv from "./DisplayFilterOptionDiv";

export default function DisplayFilterTypesDiv() {
  const { changeProductsTypes, productTypes, setProductTypes } = useDisplayContext();

  return <DisplayFilterOptionDiv filterText={"Product Type"} productFunction={changeProductsTypes} productArray={productTypes} setProductArray={setProductTypes} textLengthId={"filter-text-type"} showFirstInput={true} showTypeLength={true} />
};
