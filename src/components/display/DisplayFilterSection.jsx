import { useContext } from "react";
import { DisplayContext } from "../../services/contexts/DisplayContext";
import DisplayFilterColorsDiv from "./DisplayFilterColorsDiv";
import DisplayFilterPriceDiv from "./DisplayFilterPriceDiv";
import DisplayFilterSizeDiv from "./DisplayFilterSizeDiv";
import DisplayFilterTypesDiv from "./DisplayFilterTypesDiv";

const DisplayFilterSection = () => {
  const { setShowFilterSection } = useContext(DisplayContext);

  return (
    <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
      <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
        <div id="productFilterHeader" className="productFilterMainDivs">
          <p id="filterHeaderText">Filters</p>
          <i className="fa-solid fa-xmark productIcons" onClick={() => setShowFilterSection(false)} id="filterHeaderBackIcon"></i>
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