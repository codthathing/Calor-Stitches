import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { useScroll } from "../../usescroll";
import SearchMain from "./search_main"

const Search = () => {

  const { setSearch } = useContext(ToggleRegister)
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

  return (
    <section ref={addScroll} id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack"><i ref={removeScroll} onClick={() => setSearch(false)} className="fa-solid fa-xmark navBackIcon"></i></div>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </section>
  );
}

export default Search;