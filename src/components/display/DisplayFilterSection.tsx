import { useContext } from "react";
import { DisplayContext } from "../../store/providers/DisplayContext";
import DisplayFilterColorsDiv from "./DisplayFilterColorsDiv";
import DisplayFilterPriceDiv from "./DisplayFilterPriceDiv";
import DisplayFilterSizeDiv from "./DisplayFilterSizeDiv";
import DisplayFilterTypesDiv from "./DisplayFilterTypesDiv";
import { FaTimes } from "react-icons/fa";

const DisplayFilterSection = () => {
  const { setShowFilterSection } = useContext(DisplayContext);

  return (
    <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
      <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
        <div id="productFilterHeader" className="productFilterMainDivs">
          <p id="filterHeaderText">Filters</p>
          <FaTimes onClick={() => setShowFilterSection(false)} className="productIcons" id="filterHeaderBackIcon" />
        </div>
        <DisplayFilterTypesDiv />
        <DisplayFilterPriceDiv />
        <DisplayFilterColorsDiv />
        <DisplayFilterSizeDiv />
        <footer id="productFilterFooter"></footer>
      </main>
    </section>
  );
};

export default DisplayFilterSection;