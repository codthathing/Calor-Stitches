"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import { ProductPagination, Products } from "../product/ProductDisplayComponents";

export default function ReviewRelatedProducts() {
  const { relatedProduct, mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useReviewContext();

  return (
    <>
      <Products products={relatedProduct} mapProducts={mapProducts} shownProducts={shownProducts} />
      <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
    </>
  );
}
