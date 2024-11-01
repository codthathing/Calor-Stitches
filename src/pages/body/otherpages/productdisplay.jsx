import { useState, useContext } from "react";
import { ToggleRegister } from "../../contextpage";
import { usePageInitialEffects } from "./components/page_effects";
import ProductTemplate from "../frontpage/innerpages/products_func/productTemplate";
import { useScroll } from "../../header/usescroll";
import PageLinkTemplate from "./components/pagelinks";

const ProductDisplay = () => {
  const { setToggleSideMenu, products } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]
  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 4;
  const pageNumbers = [];
  const [showFilterDiv, setShowFilterDiv] = useState(false);
  const [showFilterSection, setShowFilterSection] = useState(false);

  for (let i = 0; i < Math.floor(products.length / shownProducts); i++) {
    pageNumbers.push(i);
  };


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
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <div id="productFilterIconTextDiv" onClick={() => setShowFilterSection(true)}>
            <i className="fa-solid fa-arrow-up-wide-short productIcons"></i>
            <p className="productShownText">FILTERS</p>
          </div>
          <div className="productFilterDiv">
            <div className="productTexIcontDiv" onClick={() => setShowFilterDiv(!showFilterDiv)}>
              <i className="fa-solid fa-angle-down productIcons"></i>
              <p className="productTexts">{"Date, new to old"}</p>
            </div>
            {showFilterDiv && <div className="productInnerDivs">
              <p className="productFilterTexts">Best selling</p>
              <p className="productFilterTexts">Rating</p>
              <p className="productFilterTexts">Aphabetically, A to Z</p>
              <p className="productFilterTexts">Aphabetically, Z to A</p>
              <p className="productFilterTexts">Price, low to high</p>
              <p className="productFilterTexts">Price, high to low</p>
              <p className="productFilterTexts">Date, old to new</p>
              <p className="productFilterTexts">Date, new to old</p>
            </div>}
          </div>
        </div>
        <ProductTemplate productArray={products.slice(mapProducts, mapProducts + shownProducts)} />
        <div className="productNavigationDiv">
          {pageNumbers.map((pages) => {
            return <p key={pages} className="productNavigationText" onClick={() => setMapProducts(shownProducts * pages)}>{pages + 1}</p>
          })}
        </div>
      </main>
      {showFilterSection && <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
        <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
          <div id="productFilterHeader" className="productFilterMainDivs">
            <p id="filterHeaderText">Flters</p>
            <i className="fa-solid fa-xmark productIcons" onClick={() => setShowFilterSection(false)} id="filterHeaderBackIcon"></i>
          </div>
          <div className="productFilterMainDivs">
            <p className="productFilterText">Product Type</p>
            <section className="productFilterSections">
              <div className="productFilterDivs">
                <input type="checkbox" className="filterCheckbox" />
                <p className="filterTextsLength">Accessories ({0})</p>
              </div>
            </section>
          </div>
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
          <div className="productFilterMainDivs">
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
          </div>
          <footer id="productFilterFooter"></footer>
        </main>
      </section>}
    </div>
  );
}

export default ProductDisplay;