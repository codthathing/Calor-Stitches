import DisplayCancelIcon from "./DisplayCancelIcon";
import DisplayFilterColorsDiv from "./DisplayFilterColorsDiv";
import DisplayFilterPriceDiv from "./DisplayFilterPriceDiv";
import DisplayFilterSizeDiv from "./DisplayFilterSizeDiv";
import DisplayFilterTypesDiv from "./DisplayFilterTypesDiv";

export default function DisplayFilterSection() {
  return (
    <section id="productFilterOptionsSection" className="productFilterSectionMainFixed">
      <main id="productFilterOptionsMain" className="productFilterSectionMainFixed">
        <div id="productFilterHeader" className="productFilterMainDivs">
          <p id="filterHeaderText">Filters</p>
          <DisplayCancelIcon />
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
