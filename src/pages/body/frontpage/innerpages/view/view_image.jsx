import { ViewContext } from "./productview";
import ProductAvail from "../products_func/product_avail";
import { useContext } from "react";

const ViewImage = () => {
  const { productImage, productAvailable, cutOff, wishlistStock } = useContext(ViewContext);

  return (
    <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
      <ProductAvail productAvailable={productAvailable} cutOff={cutOff} wishlistStock={wishlistStock} />
    </div>
  );
};

export default ViewImage;