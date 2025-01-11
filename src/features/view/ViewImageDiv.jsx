import { useContext } from "react";
import { ViewContext } from "../../services/contexts/ViewContext";
import ProductStockAlert from "../../components/product-template/ProductStockAlert";

const ViewImageDiv = () => {
  const { productImage, productAvailable, cutOff, wishlistStock } = useContext(ViewContext);

  return (
    <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
      <ProductStockAlert productAvailable={productAvailable} cutOff={cutOff} wishlistStock={wishlistStock} />
    </div>
  );
};

export default ViewImageDiv;
