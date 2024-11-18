import { createContext, useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";
import LatestLinks from "./latestlinks";
import ProductButton from "../product/product_button";
import { useProductShownEffect, Products } from "../../../otherpages/product_page/product_shown_effect";

export const LatetProductContext = createContext();
const LatestSection = () => {
  const { products } = useContext(ToggleRegister);
  const { setMapProducts, mapProducts, shownProducts } = useProductShownEffect({ products: products, startPosition: 4 });

  return (
    <LatetProductContext.Provider value={{ setMapProducts }}>
      <section id="latestSection">
        <LatestLinks />
        <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductButton linkTo={"/product/latest-items"} />
      </section>
    </LatetProductContext.Provider>
  );
};

export default LatestSection;