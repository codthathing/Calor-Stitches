import { memo, useState } from "react";
import { DisplayContext } from "../services/contexts/DisplayContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import ProductFilterDiv from "../components/product/ProductFilterDiv";
import { useProductOptionsFilters } from "../hooks/useProductOptionsFilters";
import { useProductFiltersArray } from "../hooks/useProductFiltersArray";
import DisplayFilterSection from "../components/display/DisplayFilterSection";
import { useProductShownEffect, Products, ProductPagination } from "../components/product/ProductDisplayComponents";
import { FiFilter } from "react-icons/fi";
import PageSection from "../components/layout/PageSection";

export default function DisplayPage() {
  const { presentFilterProducts, filterOption, changeProductsTypes, handleMinChange, handleMaxChange, changeProductsColors, changeProductsSize } = useProductOptionsFilters();

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({ products: presentFilterProducts });

  const { productTypes, setProductTypes, productColors, setProductColors, productSize, setProductSize } = useProductFiltersArray();

  usePageLoadEffects({ dependency: filterOption });

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "latest items", linkArrow: false },
  ];

  const [showFilterSection, setShowFilterSection] = useState(false);

  return (
    <DisplayContext.Provider value={{ setShowFilterSection, filterOption, changeProductsTypes, productTypes, setProductTypes, handleMinChange, handleMaxChange, changeProductsColors, productColors, setProductColors, changeProductsSize, productSize, setProductSize }}>
      <PageSection>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main id="productAllMain" className="productMains">
          <div className="productShownDiv">
            <div id="productFilterIconTextDiv" onClick={() => setShowFilterSection(true)}>
              <FiFilter className="productIcons" />
              <p className="productShownText">FILTERS</p>
            </div>
            <ProductFilterDiv textTwo={true} />
          </div>
          <Products products={presentFilterProducts} mapProducts={mapProducts} shownProducts={shownProducts} />
          <ProductPagination setMapProducts={setMapProducts} pageNumbers={pageNumbers} setPageNumbers={setPageNumbers} shownProducts={shownProducts} />
        </main>
        {showFilterSection && <DisplayFilterSection />}
      </PageSection>
    </DisplayContext.Provider>
  );
}
