import { useState, useContext, createContext, useEffect } from "react";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ProductFilter from "../product_page/product_filter";
import { useProductShownEffect } from "../product_page/product_shown_effect";
import { useProductOptionFilter } from "./product_option_filter";
import ProductTypes from "./product_types";
import ProductPrice from "./product_price";
import ProductColors from "./product_colors";
import ProductSize from "./product_size";

export const DisplayContext = createContext();
const ProductDisplay = () => {
  const { setToggleSideMenu, products } = useContext(ToggleRegister);

  const [presentFilterProducts, setPresentFilterProducts] = useState(products);

  const { Products, ProductPagination } = useProductShownEffect(presentFilterProducts);

  const { ChangeProductsTypes, handleMinChange, handleMaxChange, ChangeProductsColors, ChangeProductsSize } = useProductOptionFilter(setPresentFilterProducts);

  const [productTypes, setProductTypes] = useState([
    { id: 0, text: "t-shirts", option: true, style: false },
    { id: 1, text: "activewear", option: true, style: false },
    { id: 2, text: "jeans", option: true, style: false },
    { id: 3, text: "outerwear", option: true, style: false }
  ]);

  const [productColors, setProductColors] = useState([
    { id: 0, text: "olive green", color: "#808000", option: true, style: false },
    { id: 1, text: "army green", color: "#4B5320", option: true, style: false },
    { id: 2, text: "navy blue", color: "#000080", option: true, style: false },
    { id: 3, text: "pink", color: "pink", option: true, style: false },
  ]);

  const [productSize, setProductSize] = useState([
    { id: 0, text: "l", option: true, style: false },
    { id: 1, text: "xl", option: true, style: false },
    { id: 2, text: "xxl", option: true, style: false },
    { id: 3, text: "ll", option: true, style: false }
  ]);

  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]

  const [showFilterSection, setShowFilterSection] = useState(false);


  return (
    <DisplayContext.Provider value={{ ChangeProductsTypes, productTypes, setProductTypes, handleMinChange, handleMaxChange, ChangeProductsColors, productColors, setProductColors, ChangeProductsSize, productSize, setProductSize }}>
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
            <ProductPrice />
            <ProductColors />
            <ProductSize />
            <footer id="productFilterFooter"></footer>
          </main>
        </section>}
      </div>
    </DisplayContext.Provider>
  );
}

export default ProductDisplay;