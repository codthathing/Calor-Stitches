import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import { usePageInitialEffects } from "./components/page_effects";
import PageLinkTemplate from "./components/pagelinks";
import ProductFilter from "./product_page/product_filter";
import { useProductShownEffect, ProductShown, Products, ProductPagination } from "./product_page/product_shown_effect";

const CollectionPage = () => {
  const { collectionName } = useParams();
  const { products, setView, setSearch } = useContext(ToggleRegister);

  const [collection, setCollection] = useState([]);

  usePageInitialEffects({effectsArray: [{effect: setView, value: false}, {effect: setSearch, value: false}]});

  useEffect(() => {
    const presentCollections = products.filter(({ productInfo }) => productInfo.find(({ name }) => name === "CARTEGORIES").links.find(({ text }) => text === collectionName));
    setCollection(presentCollections);
  }, []);

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers, productValue } = useProductShownEffect({ products: collection });

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Collection", linkArrow: true },
    { id: 3, linkDirect: "", linkText: collectionName, linkArrow: false },
  ]

  const filterTexts = [
    { id: 0, text: "Sort by popularity", style: false },
    { id: 1, text: "Sort by average rating", style: false },
    { id: 2, text: "Sort by latest", style: true },
    { id: 3, text: "Sort by price: low to high", style: false },
    { id: 4, text: "Sort by price: high to low", style: false },
  ];

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productMains">
        <div className="productShownDiv">
          <ProductShown mapProducts={mapProducts} productValue={productValue} products={collection} />
          <ProductFilter id={"productSortTextIconDiv"} defaultText={"Sort by latest"} textOne={true} filterText={filterTexts} />
        </div>
        <Products products={collection} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
      </main>
    </div>
  );
}

export default CollectionPage;