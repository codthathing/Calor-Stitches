"use client";
import { Products } from "@/components/product/ProductDisplayComponents";
import { useLatestContext } from "@/store/providers/LatestProvider";

export default function LatestSectionProducts() {
  const { products, mapProducts, shownProducts } = useLatestContext();

  return <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />;
}
