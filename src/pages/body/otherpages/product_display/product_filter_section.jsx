import { useContext } from "react";
import { DisplayContext } from "./productdisplay";
import ProductTypes from "./product_types";
import ProductPrice from "./product_price";
import ProductColors from "./product_colors";
import ProductSize from "./product_size";

const ProductFilterSection = () => {
  const { setShowFilterSection } = useContext(DisplayContext);

  return (
    <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
      <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
        <div id="productFilterHeader" className="productFilterMainDivs">
          <p id="filterHeaderText">Filters</p>
          <i className="fa-solid fa-xmark productIcons" onClick={() => setShowFilterSection(false)} id="filterHeaderBackIcon"></i>
        </div>
        <ProductTypes />
        <ProductPrice />
        <ProductColors />
        <ProductSize />
        <footer id="productFilterFooter"></footer>
      </main>
    </section>
  );
};

export default ProductFilterSection