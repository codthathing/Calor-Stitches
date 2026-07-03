"use client";
import { useState, useEffect, memo } from "react";
import { GeneralProductType, SetState } from "@/types/productType";
import ProductTemplate from "../product-template/ProductTemplate";

export const useProductShownEffect = ({ products, startPosition = 0, shownProducts = 4 }: { products: GeneralProductType[], startPosition?: number, shownProducts?: number }) => {
  const [mapProducts, setMapProducts] = useState(startPosition);
  const [pageNumbers, setPageNumbers] = useState<{ id: number, style: boolean }[]>([]);
  const [productValue, setProductValue] = useState<number>(0);

  useEffect(() => {
    const totalPages = Math.ceil(products.length / shownProducts);
    setPageNumbers(Array.from({ length: totalPages }, (_, i) => ({ id: i, style: i === 0 })));
    setMapProducts(startPosition);
  }, [products, shownProducts, startPosition]);

  useEffect(() => {
    setProductValue(mapProducts + shownProducts > products.length ? products.length : mapProducts + shownProducts);
  }, [mapProducts, products, shownProducts]);

  return { mapProducts, setMapProducts, pageNumbers, setPageNumbers, productValue, shownProducts };
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

export const ProductPagination = memo(function ProductPagination({ setMapProducts, setPageNumbers, pageNumbers, shownProducts }: { setMapProducts: SetState<number>, setPageNumbers: SetState<{ id: number, style: boolean }[]>, pageNumbers: { id: number, style: boolean }[], shownProducts: number }) {
  const changePage = (id: number) => {
    setMapProducts(shownProducts * id);
    setPageNumbers((prevState) => prevState.map((page) => ({ ...page, style: page.id === id })));
  };

  return (
    <div className="productNavigationDiv">
      {pageNumbers.map(({ id, style }) => {
        return (
          <p key={id} className={`productNavigationText ${style ? "navigation-text" : ""}`} onClick={() => changePage(id)}>
            {id + 1}
          </p>
        );
      })}
    </div>
  );
});
