import { useContext } from "react";
import { DisplayContext } from "../../services/contexts/DisplayContext";
import DisplayFilterOptionDiv from "./DisplayFilterOptionDiv";

const DisplayFilterColorsDiv = () => {
  const { changeProductsColors, productColors, setProductColors } = useContext(DisplayContext);

  return <DisplayFilterOptionDiv filterText={"Color"} productFunction={changeProductsColors} productArray={productColors} setProductArray={setProductColors} textLengthId={"filter-color-text"} showColorDiv={true} showSecondInput={true} showColorLength={true} />;
};

export default DisplayFilterColorsDiv;
