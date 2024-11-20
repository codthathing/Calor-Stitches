import { useState, useEffect } from "react";
import ProductTemplate from "../../frontpage/innerpages/products_func/productTemplate";

export const useProductShownEffect = ({ products, startPosition = 0, shownProducts = 4 }) => {
  const [mapProducts, setMapProducts] = useState(startPosition);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [productValue, setProductValue] = useState(0);

  useEffect(() => {
    const totalPages = Math.ceil(products.length / shownProducts);
    setPageNumbers(Array.from({ length: totalPages }, (_, i) => ({ id: i, style: i === 0 })));
    setMapProducts(startPosition);
  }, [products, shownProducts]);

  useEffect(() => {
    setProductValue(((mapProducts + shownProducts) > products.length) ? products.length : mapProducts + shownProducts);
  }, [mapProducts, products]);

  return { mapProducts, setMapProducts, pageNumbers, setPageNumbers, productValue, shownProducts };
};

export const ProductShown = ({ mapProducts, productValue, products }) => {
  return (
    <p className="productShownText">Showing {mapProducts + 1} - {productValue} of {products.length} products</p>
  );
};

export const Products = ({ products, mapProducts, shownProducts }) => {
  return (
    <>
      {products.length > 0 ? <ProductTemplate productArray={products.slice(mapProducts, mapProducts + shownProducts)} /> :
        <p className="product-shown-default-text">Sorry, no products match your search criteria at the moment.</p>}
    </>
  );
};

export const ProductPagination = ({ setMapProducts, setPageNumbers, pageNumbers, shownProducts }) => {
  const ChangePage = (id) => {
    setMapProducts(shownProducts * id);
    setPageNumbers(prevState => prevState.map((page) => ({ ...page, style: page.id === id })));
  };
  return (
    <div className="productNavigationDiv">
      {pageNumbers.map(({ id, style }) => {
        return <p key={id} className={`productNavigationText ${style ? "navigation-text" : ""}`} onClick={() => ChangePage(id)}>{id + 1}</p>
      })}
    </div>
  );
};