import { useState, useContext, createContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ProductFilter from "../product_page/product_filter";
import { useProductShownEffect } from "../product_page/product_shown_effect";
import { useProductOptionFilter } from "./product_option_filter";
import ProductTypes from "./product_types";
import ProductSize from "./product_size";

export const DisplayContext = createContext();
const ProductDisplay = () => {
  const { setToggleSideMenu, products } = useContext(ToggleRegister);

  const [presentFilterProducts, setPresentFilterProducts] = useState(products);

  const { Products, ProductPagination } = useProductShownEffect(presentFilterProducts);

  const { ChangeProductsTypes, ChangeProductsSize } = useProductOptionFilter(setPresentFilterProducts);








  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]

  const [showFilterSection, setShowFilterSection] = useState(false);

  let min = 20;
  let max = 170;

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };


  return (
    <DisplayContext.Provider value={{ ChangeProductsTypes, ChangeProductsSize }}>
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
        {showFilterSection && <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
          <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
            <div id="productFilterHeader" className="productFilterMainDivs">
              <p id="filterHeaderText">Filters</p>
              <i className="fa-solid fa-xmark productIcons" onClick={() => setShowFilterSection(false)} id="filterHeaderBackIcon"></i>
            </div>
            <ProductTypes />
            <div className="productFilterMainDivs">
              <p className="productFilterText">Price</p>
              <div id="productFilterSlider">
                <input type="range" min={min} max={max} value={minValue} onChange={handleMinChange} className="filterPriceRange thumb thumb--left" />
                <input type="range" min={min} max={max} value={maxValue} onChange={handleMaxChange} className="filterPriceRange thumb thumb--right" />
                <div id="productFilterSliderTrack"></div>
                <div id="productFilterSliderRange" style={{ left: `${((minValue - min) / (max - min)) * 100}%`, right: `${100 - ((maxValue - min) / (max - min)) * 100}%` }}></div>
              </div>
              <div id="filterPriceInnerDiv">
                <p className="filterPriceValueTexts">${minValue}</p>
                <p className="filterPriceValueTexts">${maxValue}</p>
              </div>
            </div>
            <div className="productFilterMainDivs">
              <p className="productFilterText">Color</p>
              <section className="productFilterSections">
                <div className="productFilterColorDiv">
                  <div className="productFilterDivs">
                    <div className="filterColorInnerDivs"></div>
                    <p className="filterTextsLength">Red ({0})</p>
                  </div>
                  <input type="checkbox" name="" id="" className="filterCheckbox" />
                </div>
              </section>
            </div>
            <ProductSize />
            {/* <div className="productFilterMainDivs">
              <p className="productFilterText">Size</p>
              <section className="productFilterSections">
                <div className="productFilterDivs">
                  <input type="checkbox" name="" id="" className="filterCheckbox" />
                  <p className="filterTextsLength">L ({0})</p>
                </div>
                <div className="productFilterDivs">
                  <input type="checkbox" name="" id="" className="filterCheckbox" />
                  <p className="filterTextsLength">L ({0})</p>
                </div>
              </section>
            </div> */}
            <footer id="productFilterFooter"></footer>
          </main>
        </section>}
      </div>
    </DisplayContext.Provider>
  );
}

export default ProductDisplay;