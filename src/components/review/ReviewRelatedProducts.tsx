"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import { ProductPagination, Products } from "../product/ProductDisplayComponents";

export default function ReviewRelatedProducts() {
  const { relatedProducts, mapProducts, shownProducts, setMapProducts, pageNumbers } = useReviewContext();

  return (
    <>
      <Products products={relatedProducts} mapProducts={mapProducts} shownProducts={shownProducts} />
      <ProductPagination setMapProducts={setMapProducts} pageNumbers={pageNumbers} shownProducts={shownProducts} />
    </>
  );
}
