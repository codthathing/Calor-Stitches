"use client";
import { useState, useMemo, memo } from "react";
import { GeneralProductType, SetState } from "@/types/productType";
import ProductTemplate from "../product-template/ProductTemplate";

export const useProductShownEffect = ({ products, startPosition = 0, shownProducts = 4 }: { products: GeneralProductType[], startPosition?: number, shownProducts?: number }) => {
  const [mapProducts, setMapProducts] = useState(startPosition);
  const [prevProducts, setPrevProducts] = useState(products);

  if (prevProducts !== products) {
    setPrevProducts(products);
    setMapProducts(startPosition);
  }

  const pageNumbers = useMemo(() => {
    const totalPages = Math.ceil(products.length / shownProducts);
    const currentPage = Math.floor(mapProducts / shownProducts);
    return Array.from({ length: totalPages }, (_, i) => ({ id: i, style: i === currentPage }));
  }, [products.length, shownProducts, mapProducts]);

  const productValue = Math.min(mapProducts + shownProducts, products.length);

  return { mapProducts, setMapProducts, pageNumbers, productValue, shownProducts };
};

export const ProductShown = memo(function ProductShown({ mapProducts, productValue, products }: { mapProducts: number, productValue: number, products: GeneralProductType[] }) {
  return (
    <p className="productShownText">
      Showing {mapProducts + 1} - {productValue} of {products.length} products
    </p>
  );
});

export const Products = memo(function Products({ products, mapProducts, shownProducts }: { products: GeneralProductType[], mapProducts: number, shownProducts: number }) {
  return <>{products.length > 0 ? <ProductTemplate productArray={products.slice(mapProducts, mapProducts + shownProducts)} /> : <p className="product-shown-default-text">Sorry, no products match your search criteria at the moment.</p>}</>;
});

export const ProductPagination = memo(function ProductPagination({ setMapProducts, pageNumbers, shownProducts }: { setMapProducts: SetState<number>, pageNumbers: { id: number, style: boolean }[], shownProducts: number }) {
  return (
    <div className="productNavigationDiv">
      {pageNumbers.map(({ id, style }) => (
        <p key={id} className={`productNavigationText ${style ? "navigation-text" : ""}`} onClick={() => setMapProducts(shownProducts * id)}>
          {id + 1}
        </p>
      ))}
    </div>
  );
});
