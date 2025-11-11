import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import ProductButton from "./ProductButton";
import { useProductShownEffect, Products } from "../../product/ProductDisplayComponents";

const ProductSection = () => {
  const { products, product_section } = useContext(NavigateContext);
  const { mapProducts, shownProducts } = useProductShownEffect({ products: products, shownProducts: 8 });

  return (
    <section id="productSection" ref={product_section}>
      <div id="productTopicDiv">
        <p className="product-section-para paragraphStyles">NEW AND EXTRAORDINARY</p>
        <h1 className="product-section-head">Featured Products</h1>
      </div>
      <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
      <ProductButton linkTo={"/product"} />
    </section>
  );
};

export default ProductSection;