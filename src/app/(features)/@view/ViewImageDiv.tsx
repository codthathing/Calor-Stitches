import { useContext } from "react";
import { ViewContext } from "../../../store/providers/ViewContext";
import ProductStockAlert from "../../product-template/ProductStockAlert";

const ViewImageDiv = () => {
  const { productImage, productAvailable, cutOff, wishlistStock } = useContext(ViewContext);

  return (
    <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
      <ProductStockAlert productAvailable={productAvailable} cutOff={cutOff} wishlistStock={wishlistStock} />
    </div>
  );
};

export default ViewImageDiv;
