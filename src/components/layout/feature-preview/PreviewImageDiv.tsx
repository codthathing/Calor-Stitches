"use client";
import ProductStockAlert from "@/components/product-template/ProductStockAlert";
import { usePreviewContext } from "@/store/providers/PreviewProvider";

export default function PreviewImageDiv() {
  const { productImage, productAvailable, cutOff, wishlistStock } = usePreviewContext();

  return (
    <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
      <ProductStockAlert productAvailable={productAvailable} cutOff={cutOff} wishlistStock={wishlistStock} />
    </div>
  );
};
