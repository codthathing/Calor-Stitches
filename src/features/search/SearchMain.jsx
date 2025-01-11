import { useContext, useState, useEffect } from "react";
import { useInputFocus } from "../../hooks/useInputFocus";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useProductShownEffect, Products, ProductPagination } from "../../components/product/ProductDisplayComponents";

const SearchMain = () => {
  const { products } = useContext(NavigateContext);

  const { inputFocus } = useInputFocus();
  const [searchItems, setSearchItems] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setSearchItems(products.filter((items) => (items.productName.toLowerCase()).includes(searchInput.toLowerCase())));
  }, [searchInput]);
  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({ products: searchItems, shownProducts: 8 });


  return (
    <main id="searchMain">
      <form id="searchForm">
        <input
          ref={inputFocus}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          id="searchInput"
          placeholder="What are you looking for?" />
        <i className="fa-solid fa-magnifying-glass" id="searchIcon" type="submit"></i>
      </form>
      <div id="searchProductDiv">
        {searchItems.length > 0 ?
          <section id="searchProductSection">
            <h1 className="navHeadText" id="searchHead">Popular Product</h1>
            <Products products={searchItems} mapProducts={mapProducts} shownProducts={shownProducts} />
            <ProductPagination shownProducts={shownProducts} pageNumbers={pageNumbers} setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} />
          </section> :
          <p id="absentText">`{searchInput}` is not available.</p>
        }
      </div>
    </main>
  );
};

export default SearchMain;