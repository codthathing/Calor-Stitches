import { useState, useEffect } from "react";
import ProductTemplate from "../../frontpage/innerpages/products_func/productTemplate";

export const useProductShownEffect = ({products, startPosition = 0, shownProducts = 4}) => {

  const [mapProducts, setMapProducts] = useState(startPosition);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(products.length / shownProducts);
    setPageNumbers(
      Array.from({ length: totalPages }, (_, i) => ({ id: i, style: i === 0 }))
    );
    setMapProducts(startPosition);
  }, [products, shownProducts]);

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
      <>
        {products.length > 0 ? <ProductTemplate productArray={products.slice(mapProducts, mapProducts + shownProducts)} /> : <p className="product-shown-default-text">Sorry, no products match your search criteria at the moment.</p>}
      </>
    );
  };

  const ProductPagination = () => {
    const ChangePage = (id) => {
      setMapProducts(shownProducts * id);
      setPageNumbers(prevState => prevState.map((page) => ({...page, style: page.id === id})));
    };
    return (
      <div className="productNavigationDiv">
        {pageNumbers.map(({id, style}) => {
          return <p key={id} className={`productNavigationText ${style ? "navigation-text" : ""}`} onClick={() => ChangePage(id)}>{id + 1}</p>
        })}
      </div>
    );
  };

  return { setMapProducts, ProductShown, Products, ProductPagination };
};