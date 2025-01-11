import { useContext } from "react";
import { DisplayContext } from "../../services/contexts/DisplayContext";
import DisplayFilterOptionDiv from "./DisplayFilterOptionDiv";

const DisplayFilterTypesDiv = () => {
  const { changeProductsTypes, productTypes, setProductTypes } = useContext(DisplayContext);

  return <DisplayFilterOptionDiv filterText={"Product Type"} productFunction={changeProductsTypes} productArray={productTypes} setProductArray={setProductTypes} textLengthId={"filter-text-type"} showFirstInput={true} showTypeLength={true} />
};

export default DisplayFilterTypesDiv;