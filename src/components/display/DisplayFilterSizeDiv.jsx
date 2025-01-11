import { useContext } from "react";
import { DisplayContext } from "../../services/contexts/DisplayContext";
import DisplayFilterOptionDiv from "./DisplayFilterOptionDiv";

const DisplayFilterSizeDiv = () => {
  const { changeProductsSize, productSize, setProductSize } = useContext(DisplayContext);

  return <DisplayFilterOptionDiv filterText={"Size"} productFunction={changeProductsSize} productArray={productSize} setProductArray={setProductSize} textLengthId={"filter-text-size"} showFirstInput={true} showSizeLength={true} />
};

export default DisplayFilterSizeDiv;