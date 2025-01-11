import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import SearchMain from "./SearchMain"

const SearchSection = () => {

  const { setSearch } = useContext(NavigateContext)
  const { presentScroll: addScroll } = useSectionScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useSectionScroll("hidden", "auto");

  return (
    <section ref={addScroll} id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack"><i ref={removeScroll} onClick={() => setSearch(false)} className="fa-solid fa-xmark navBackIcon"></i></div>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </section>
  );
}

export default SearchSection;