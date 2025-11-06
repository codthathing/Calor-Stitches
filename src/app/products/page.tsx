import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import ProductFilterDiv from "../components/product/ProductFilterDiv";
import { useProductShownEffect, ProductShown, Products, ProductPagination } from "../components/product/ProductDisplayComponents";
import PageSection from "../components/layout/PageSection";

export default function ProductPage() {
  const { setToggleSideMenu, products } = useContext(NavigateContext);
  usePageLoadEffects({effectsArray: [{ effect: setToggleSideMenu, value: false }]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ];

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers, productValue } = useProductShownEffect({products: products})

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <ProductShown mapProducts={mapProducts} productValue={productValue} products={products} />
          <ProductFilterDiv textTwo={true} />
        </div>
        <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
      </main>
    </PageSection>
  );
}