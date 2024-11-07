import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import { usePageInitialEffects } from "./components/page_effects";
import ProductTemplate from "../frontpage/innerpages/products_func/productTemplate";
import PageLinkTemplate from "./components/pagelinks";
import ProductFilter from "./product_page/product_filter";

const CollectionPage = () => {
  const { collectionName } = useParams();
  const [collection, setCollection] = useState([]);
  const { setToggleSideMenu, hotItems, newArrivals, onSales } = useContext(ToggleRegister);
  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);
  useEffect(() => {
    const pathName = window.location.pathname;
    if (pathName.includes("/dresses")) {
      setCollection(hotItems)
    } else if (pathName.includes("/t-shirts")) {
      setCollection(newArrivals)
    } else if (pathName.includes("/outerwear")) {
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

  for (let i = 0; i < Math.floor(collection.length / shownProducts); i++) {
    pageNumbers.push(i);
  };

  const filterTexts = [
    {id: 0, text: "Sort by popularity", style: false},
    {id: 1, text: "Sort by average rating", style: false},
    {id: 2, text: "Sort by latest", style: true},
    {id: 3, text: "Sort by price: low to high", style: false},
    {id: 4, text: "Sort by price: high to low", style: false},
  ];

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productMains">
        <div className="productShownDiv">
          <p className="productShownText">Showing {mapProducts + 1} - {mapProducts + shownProducts} of {collection.length} products</p>
          <ProductFilter id={"productSortTextIconDiv"} defaultText={"Sort by latest"} textOne={true} filterText={filterTexts} />
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