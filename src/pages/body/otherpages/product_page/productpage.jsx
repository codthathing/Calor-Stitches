import { useContext, useState } from "react";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ProductFilter from "./product_filter";
import ProductTemplate from "../../frontpage/innerpages/products_func/productTemplate";

const ProductPage = () => {

  const { setNavbar, setToggleSideMenu, products } = useContext(ToggleRegister);
  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }, { effect: setNavbar, value: true }]);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]
  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 4;
  const pageNumbers = [];

  for (let i = 0; i < Math.floor(products.length / shownProducts); i++) {
    pageNumbers.push(i);
  };

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <p className="productShownText">Showing {mapProducts + 1} - {mapProducts + shownProducts} of {products.length} products</p>
          <ProductFilter textTwo={true} />
        </div>
        <ProductTemplate productArray={products.slice(mapProducts, mapProducts + shownProducts)} />
        <div className="productNavigationDiv">
          {pageNumbers.map((pages) => {
            return <p key={pages} className="productNavigationText" onClick={() => setMapProducts(shownProducts * pages)}>{pages + 1}</p>
          })}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;