import { useContext, useState, useEffect } from "react";
import { useFocus } from "../account_pages/register_page/usefocus";
import { ToggleRegister } from "../../../contextpage";
import ProductTemplate from "../../../body/frontpage/innerpages/products_func/productTemplate";

const SearchMain = () => {
  const { products } = useContext(ToggleRegister);

  const { inputFocus } = useFocus();
  const [searchItems, setSearchItems] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setSearchItems(products.filter((items) => (items.productName).includes(searchInput.toLowerCase())));
  }, [searchInput]);

  return (
    <main id="searchMain">
      <form id="searchForm">
        <input ref={inputFocus}
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
            <ProductTemplate productArray={searchItems} />
          </section> :
          <p id="absentText">`{searchInput}` is not available.</p>
        }
      </div>
    </main>
  );
};

export default SearchMain;