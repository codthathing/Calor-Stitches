"use client";
import { FiFilter } from "react-icons/fi";
import ProductFilterDiv from "../product/ProductFilterDiv";
import { ProductPagination, Products } from "../product/ProductDisplayComponents";
import DisplayFilterSection from "./DisplayFilterSection";
import { useDisplayContext } from "@/store/providers/DisplayProvider";

export default function DisplayMain() {
  const { setShowFilterSection, presentFilterProducts, mapProducts, shownProducts, setMapProducts, pageNumbers, setPageNumbers, showFilterSection } = useDisplayContext();

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
        <ProductPagination setMapProducts={setMapProducts} pageNumbers={pageNumbers} setPageNumbers={setPageNumbers} shownProducts={shownProducts} />
      </main>
      {showFilterSection && <DisplayFilterSection />}
    </>
  );
}
