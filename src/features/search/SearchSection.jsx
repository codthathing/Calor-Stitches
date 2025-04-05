import { useContext, useEffect } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import SearchMain from "./SearchMain";
import { FaTimes } from "react-icons/fa";

const SearchSection = () => {
  const { setSearch } = useContext(NavigateContext)
  const { presentScroll } = useSectionScroll();

  useEffect(() => {
    document.querySelector("body").style.overflowY = "hidden";
    return () => document.querySelector("body").style.overflowY = "auto";
  }, []);
  
  return (
    <section ref={presentScroll} id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack"><FaTimes onClick={() => setSearch(false)} className="navBackIcon" /></div>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </section>
  );
}

export default SearchSection;