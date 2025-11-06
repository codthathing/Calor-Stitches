import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateContext";
import { LatestContext } from "../../../store/providers/LatestContext";
import LatestNavigationLinks from "./LatestNavigationLinks";
import ProductButton from "../product/ProductButton";
import { useProductShownEffect, Products } from "../../product/ProductDisplayComponents";


const LatestSection = () => {
  const { products } = useContext(NavigateContext);
  const { setMapProducts, mapProducts, shownProducts } = useProductShownEffect({ products: products, startPosition: 4 });

  return (
    <LatestContext.Provider value={{ setMapProducts }}>
      <section id="latestSection">
        <LatestNavigationLinks />
        <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductButton linkTo={"/product/display-page"} />
      </section>
    </LatestContext.Provider>
  );
};

export default LatestSection;
