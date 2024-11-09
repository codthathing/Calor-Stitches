import { useContext } from "react";
import { DisplayContext } from "./productdisplay";
import ProductFilterOptionDiv from "./product_filter_option_div";

const ProductSize = () => {
  const { ChangeProductsSize, productSize, setProductSize } = useContext(DisplayContext);

  return <ProductFilterOptionDiv filterText={"Size"} productFunction={ChangeProductsSize} productArray={productSize} setProductArray={setProductSize} textLengthId={"filter-text-size"} showFirstInput={true} showSizeLength={true} />
};

export default ProductSize;