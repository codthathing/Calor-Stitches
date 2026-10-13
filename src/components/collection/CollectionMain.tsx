"use client";
import { ProductPagination, Products, ProductShown, useProductShownEffect } from "../product/ProductDisplayComponents";
import PageNavigationLinks from "../ui/PageNavigationLinks";
import ProductFilterDiv from "../product/ProductFilterDiv";
import { GeneralProductType } from "@/types/productType";

export default function CollectionMain({ category, collections } : { category: string; collections: GeneralProductType[] }) {
  const { mapProducts, shownProducts, setMapProducts, pageNumbers, productValue } = useProductShownEffect({ products: collections });

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
          <ProductShown mapProducts={mapProducts} productValue={productValue} products={collections} />
          <ProductFilterDiv id={"productSortTextIconDiv"} defaultText={"Sort by latest"} textOne={true} filterText={filterTexts} />
        </div>
        <Products products={collections} mapProducts={mapProducts} shownProducts={shownProducts} />
        <ProductPagination setMapProducts={setMapProducts} pageNumbers={pageNumbers} shownProducts={shownProducts} />
      </main>
    </>
  );
}
