import { useContext, useEffect } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import { useSectionScroll } from "../../../hooks/useSectionScroll";
import SearchMain from "./SearchMain";
import { FaTimes } from "react-icons/fa";

export default function SearchPage() {
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