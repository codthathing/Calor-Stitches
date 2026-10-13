"use client";
import { FiFilter } from "react-icons/fi";
import ProductFilterDiv from "../product/ProductFilterDiv";
import { ProductPagination, Products, useProductShownEffect } from "../product/ProductDisplayComponents";
import DisplayFilterSection from "./DisplayFilterSection";
import { useDisplayContext } from "@/store/providers/DisplayProvider";

export default function DisplayMain() {
  const { presentFilterProducts, setShowFilterSection, showFilterSection } = useDisplayContext();
  const { mapProducts, shownProducts, setMapProducts, pageNumbers } = useProductShownEffect({ products: presentFilterProducts });

  return (
    <>
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <div id="productFilterIconTextDiv" onClick={() => setShowFilterSection(true)}>
            <FiFilter className="productIcons" />
            <p className="productShownText">FILTERS</p>
          </div>
          <ProductFilterDiv textTwo={true} />
        </div>
        <Products products={presentFilterProducts} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductPagination setMapProducts={setMapProducts} pageNumbers={pageNumbers} shownProducts={shownProducts} />
      </main>
      {showFilterSection && <DisplayFilterSection />}
    </>
  );
}
