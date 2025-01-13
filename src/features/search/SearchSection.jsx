import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import SearchMain from "./SearchMain"

const SearchSection = () => {

  const { setSearch } = useContext(NavigateContext)
  const { presentScroll } = useSectionScroll();
  
  return (
    <section ref={presentScroll} id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack"><i onClick={() => setSearch(false)} className="fa-solid fa-xmark navBackIcon"></i></div>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </section>
  );
}

export default SearchSection;