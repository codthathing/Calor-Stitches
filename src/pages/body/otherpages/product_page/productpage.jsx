import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ProductFilter from "./product_filter";
import { useProductShownEffect, ProductShown, Products, ProductPagination } from "./product_shown_effect";

const ProductPage = () => {

  const { setToggleSideMenu, products } = useContext(ToggleRegister);
  usePageInitialEffects({effectsArray: [{ effect: setToggleSideMenu, value: false }]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ];

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers, productValue } = useProductShownEffect({products: products})

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <ProductShown mapProducts={mapProducts} productValue={productValue} products={products} />
          <ProductFilter textTwo={true} />
        </div>
        <Products products={products} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
      </main>
    </div>
  );
}

export default ProductPage;