"use client";
import ProductButton from "@/components/home/product/ProductButton";
import { Products, useProductShownEffect } from "@/components/product/ProductDisplayComponents";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";

export default function ProductSectionWrapper({ children }: { children: ReactNode }) {
  const { products, product_section } = useNavigateContext();
  const { mapProducts, shownProducts } = useProductShownEffect({ products: products, shownProducts: 8 });

  return (
    <section id="productSection" ref={product_section}>
      {children}
      <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
      <ProductButton linkTo={"/product"} />
    </section>
  );
}
