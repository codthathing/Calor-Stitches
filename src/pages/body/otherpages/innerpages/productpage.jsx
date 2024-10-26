import { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../pagelinks";
import ProductTemplate from "../../frontpage/innerpages/products_func/productTemplate";

const ProductPage = () => {

  const { setNavbar, setToggleSideMenu, products } = useContext(ToggleRegister);

  useEffect(() => {
    setNavbar(true);
    setToggleSideMenu(false);
    window.scrollTo(0, 0);
  }, [setNavbar, setToggleSideMenu])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ]
  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 4;
  const pageNumbers = [];
  const [showFilterDiv, setShowFilterDiv] = useState(false);

  for (let i = 0; i < Math.floor(products.length / shownProducts); i++) {
    pageNumbers.push(i);
  };

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <p className="productShownText">Showing {mapProducts + 1} - {mapProducts + shownProducts} of {products.length} products</p>
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
    </div>
  );
}

export default ProductPage;