"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useEffect } from "react";
import { ProductPagination, Products, ProductShown, useProductShownEffect } from "../product/ProductDisplayComponents";
import PageNavigationLinks from "../ui/PageNavigationLinks";
import ProductFilterDiv from "../product/ProductFilterDiv";

export default function CollectionMain({ category } : { category: string }) {
  const { products, collection, setCollection } = useNavigateContext();

  useEffect(() => {
    const presentCollections = products.filter(({ productInfo }) => productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.find(({ text }) => text === category));
    setCollection(presentCollections);
  }, [products, category]);

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers, productValue } = useProductShownEffect({ products: collection });

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Collection", linkArrow: true },
    { id: 3, linkDirect: "", linkText: category, linkArrow: false },
  ]

  const filterTexts = [
    { id: 0, text: "Sort by popularity", style: false },
    { id: 1, text: "Sort by average rating", style: false },
    { id: 2, text: "Sort by latest", style: true },
    { id: 3, text: "Sort by price: low to high", style: false },
    { id: 4, text: "Sort by price: high to low", style: false },
  ];

  return (
    <>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main className="productMains">
        <div className="productShownDiv">
          <ProductShown mapProducts={mapProducts} productValue={productValue} products={collection} />
          <ProductFilterDiv id={"productSortTextIconDiv"} defaultText={"Sort by latest"} textOne={true} filterText={filterTexts} />
        </div>
        <Products products={collection} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
      </main>
    </>
  );
}
