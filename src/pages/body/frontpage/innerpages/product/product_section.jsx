import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";
import ProductTemplate from "../products_func/productTemplate";
import ProductButton from "./product_button";

const ProductSection = () => {
  const { products } = useContext(ToggleRegister);

  return (
    <section id="productSection">
      <div id="productTopicDiv">
        <p id="productParagraph" className="paragraphStyles">NEW AND EXTRAORDINARY</p>
        <h1 id="productHead">Featured Products</h1>
      </div>
      <ProductTemplate productArray={products} />
      <ProductButton linkTo={"/product"} />
    </section>
  );
};

export default ProductSection;