"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ProductPagination, Products, ProductShown, useProductShownEffect } from "./ProductDisplayComponents";
import ProductFilterDiv from "./ProductFilterDiv";

export default function ProductMain() {
  const { products } = useNavigateContext();
  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers, productValue } = useProductShownEffect({products: products})
  
  return (
    <main id="productAllMain" className="productMains">
      <div className="productShownDiv">
        <ProductShown mapProducts={mapProducts} productValue={productValue} products={products} />
        <ProductFilterDiv textTwo={true} />
      </div>
      <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
      <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
    </main>
  );
}
