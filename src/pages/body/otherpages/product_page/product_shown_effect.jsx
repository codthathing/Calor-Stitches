import { useState, useEffect } from "react";
import ProductTemplate from "../../frontpage/innerpages/products_func/productTemplate";

export const useProductShownEffect = (products) => {

  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 4;
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(products.length / shownProducts); i++) {
    pageNumbers.push(i);
  };

  const [productValue, setProductValue] = useState(0);
  useEffect(() => {
    if((mapProducts + shownProducts) > products.length) {
      setProductValue(products.length);
    } else {
      setProductValue(mapProducts + shownProducts);
    };
  }, [mapProducts, products]);

  const ProductShown = () => {
    return (
      <p className="productShownText">Showing {mapProducts + 1} - {productValue} of {products.length} products</p>
    );
  };

  const Products = () => {
    return (
      <ProductTemplate productArray={products.slice(mapProducts, mapProducts + shownProducts)} />
    );
  };

  const ProductPagination = () => {
    return (
      <div className="productNavigationDiv">
        {pageNumbers.map((pages) => {
          return <p key={pages} className="productNavigationText" onClick={() => setMapProducts(shownProducts * pages)}>{pages + 1}</p>
        })}
      </div>
    );
  };

  return { ProductShown, Products, ProductPagination };
};