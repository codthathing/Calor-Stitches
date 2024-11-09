import { useContext } from "react";
import { DisplayContext } from "./productdisplay";
import ProductFilterOptionDiv from "./product_filter_option_div";

const ProductTypes = () => {
  const { ChangeProductsTypes, productTypes, setProductTypes } = useContext(DisplayContext);

  return <ProductFilterOptionDiv filterText={"Product Type"} productFunction={ChangeProductsTypes} productArray={productTypes} setProductArray={setProductTypes} textLengthId={"filter-text-type"} showFirstInput={true} showTypeLength={true} />
};

export default ProductTypes;