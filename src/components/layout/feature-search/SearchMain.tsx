"use client";
import { ProductPagination, Products, useProductShownEffect } from "@/components/product/ProductDisplayComponents";
import { useInputFocus } from "@/hooks/useInputFocus";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { GeneralProductType } from "@/types/productType";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchMain() {
  const { products } = useNavigateContext();
  const { inputFocus } = useInputFocus();
  const [searchItems, setSearchItems] = useState<GeneralProductType[]>(products);
  const [searchInput, setSearchInput] = useState<string>("");
  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({ products: searchItems, shownProducts: 8 });

  useEffect(() => {
    setSearchItems(products.filter((items) => items.productName.toLowerCase().includes(searchInput.toLowerCase())));
  }, [searchInput]);

  return (
    <main id="searchMain">
      <form id="searchForm">
        <input ref={inputFocus} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" id="searchInput" placeholder="What are you looking for?" />
        <FaSearch id="searchIcon" />
      </form>
      <div id="searchProductDiv">
        {searchItems.length > 0 ? (
          <section id="searchProductSection">
            <h1 className="navHeadText" id="searchHead">
              Popular Product
            </h1>
            <Products products={searchItems} mapProducts={mapProducts} shownProducts={shownProducts} />
            <ProductPagination shownProducts={shownProducts} pageNumbers={pageNumbers} setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} />
          </section>
        ) : (
          <p id="absentText">`{searchInput}` is not available.</p>
        )}
      </div>
    </main>
  );
}
