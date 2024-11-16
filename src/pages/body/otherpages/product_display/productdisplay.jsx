import { useState, createContext } from "react";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ProductFilter from "../product_page/product_filter";
import { useProductShownEffect } from "../product_page/product_shown_effect";
import { useProductOptionFilter } from "./product_option_filter";
import { useProductFiltersArray } from "./product_filters_array";
import ProductFilterSection from "./product_filter_section";

export const DisplayContext = createContext();
const ProductDisplay = () => {
  const { presentFilterProducts, ChangeProductsTypes, handleMinChange, handleMaxChange, ChangeProductsColors, ChangeProductsSize } = useProductOptionFilter();

  const { Products, ProductPagination } = useProductShownEffect({products: presentFilterProducts});

  const { productTypes, setProductTypes, productColors, setProductColors, productSize, setProductSize } = useProductFiltersArray();

  usePageInitialEffects({});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "latest items", linkArrow: false },
  ]

  const [showFilterSection, setShowFilterSection] = useState(false);


  return (
    <DisplayContext.Provider value={{ setShowFilterSection, ChangeProductsTypes, productTypes, setProductTypes, handleMinChange, handleMaxChange, ChangeProductsColors, productColors, setProductColors, ChangeProductsSize, productSize, setProductSize }}>
      <div className="otherPages">
        <PageLinkTemplate pageLinks={pageLinkDetails} />
        <main id="productAllMain" className="productMains">
          <div className="productShownDiv">
            <div id="productFilterIconTextDiv" onClick={() => setShowFilterSection(true)}>
              <i className="fa-solid fa-arrow-up-wide-short productIcons"></i>
              <p className="productShownText">FILTERS</p>
            </div>
            <ProductFilter textTwo={true} />
          </div>
          <Products />
          <ProductPagination />
        </main>
        {showFilterSection && <ProductFilterSection />}
      </div>
    </DisplayContext.Provider>
  );
}

export default ProductDisplay;