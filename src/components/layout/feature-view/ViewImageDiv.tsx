"use client";
import ProductStockAlert from "@/components/product-template/ProductStockAlert";
import { useViewContext } from "@/store/providers/ViewProvider";

export default function ViewImageDiv() {
  const { productImage, productAvailable, cutOff, wishlistStock } = useViewContext();

  return (
    <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
      <ProductStockAlert productAvailable={productAvailable} cutOff={cutOff} wishlistStock={wishlistStock} />
    </div>
  );
};
