import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";
import ProductButton from "./product_button";
import { useProductShownEffect, Products } from "../../../otherpages/product_page/product_shown_effect";

const ProductSection = () => {
  const { products, product_section } = useContext(ToggleRegister);
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