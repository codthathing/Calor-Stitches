import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";
import LatestLinks from "./latestlinks";
import ProductTemplate from "../products_func/productTemplate";
import ProductButton from "../product/product_button";

const LatestSection = () => {
  const { latestItems } = useContext(ToggleRegister);

  return (
    <section id="latestSection">
      <LatestLinks />
      <ProductTemplate productArray={latestItems} />
      <ProductButton linkTo={"/product/latest-items"} />
    </section>
  );
};

export default LatestSection;