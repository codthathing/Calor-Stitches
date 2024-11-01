import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import { usePageInitialEffects } from "./components/page_effects";
import ProductTemplate from "../frontpage/innerpages/products_func/productTemplate";
import PageLinkTemplate from "./components/pagelinks";

const CollectionPage = () => {
  const { collectionName } = useParams();
  const [collection, setCollection] = useState([]);
  const { setToggleSideMenu, hotItems, newArrivals, onSales } = useContext(ToggleRegister);
  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);
  useEffect(() => {
    const pathName = window.location.pathname;
    if (pathName.includes("/Dresses")) {
      setCollection(hotItems)
    } else if (pathName.includes("/T-shirts")) {
      setCollection(newArrivals)
    } else if (pathName.includes("/Outerwear")) {
      setCollection(onSales)
    }
  }, [hotItems, newArrivals, onSales])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Collection", linkArrow: true },
    { id: 3, linkDirect: "", linkText: collectionName, linkArrow: false },
  ]
  const [mapProducts, setMapProducts] = useState(0);
  const shownProducts = 4;
  const pageNumbers = [];
  const [showFilterDiv, setShowFilterDiv] = useState(false);

  for (let i = 0; i < Math.floor(collection.length / shownProducts); i++) {
    pageNumbers.push(i);
  };

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productMains">
        <div className="productShownDiv">
          <p className="productShownText">Showing {mapProducts + 1} - {mapProducts + shownProducts} of {collection.length} products</p>
          <div className="productFilterDiv">
            <div id="productSortTextIconDiv" className="productTexIcontDiv" onClick={() => setShowFilterDiv(!showFilterDiv)}>
              <p className="productTexts">{"Sort by latest"}</p>
              <i className="fa-solid fa-angle-down productIcons"></i>
            </div>
            {showFilterDiv && <div className="productInnerDivs">
              <p className="productFilterTexts">Sort by popularity</p>
              <p className="productFilterTexts">Sort by average rating</p>
              <p className="productFilterTexts">Sort by latest</p>
              <p className="productFilterTexts">Sort by price: low to high</p>
              <p className="productFilterTexts">Sort by price: high to low</p>
            </div>}
          </div>
        </div>
        <ProductTemplate productArray={collection} />
        <div className="productNavigationDiv">
          {pageNumbers.map((pages) => {
            return <p key={pages} className="productNavigationText" onClick={() => setMapProducts(shownProducts * pages)}>{pages + 1}</p>
          })}
        </div>
      </main>
    </div>
  );
}

export default CollectionPage;