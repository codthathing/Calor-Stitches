import { useContext } from "react";
import { DisplayContext } from "./productdisplay";
import ProductFilterOptionDiv from "./product_filter_option_div";

const ProductColors = () => {
  const { ChangeProductsColors, productColors, setProductColors } = useContext(DisplayContext);

  return <ProductFilterOptionDiv filterText={"Color"} productFunction={ChangeProductsColors} productArray={productColors} setProductArray={setProductColors} textLengthId={"filter-color-text"} showColorDiv={true} showSecondInput={true} showColorLength={true} />
};

export default ProductColors;