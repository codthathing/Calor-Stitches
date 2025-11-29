import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { Products, useProductShownEffect } from "@/components/product/ProductDisplayComponents";
import { LatestContext } from "@/store/providers/LatestContext";
import LatestNavigationLinks from "./LatestNavigationLinks";
import ProductButton from "../product/ProductButton";


const LatestSection = () => {
  const { products } = useNavigateContext();
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
