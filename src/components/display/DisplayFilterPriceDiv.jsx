import { useContext, useEffect } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { DisplayContext } from "../../services/contexts/DisplayContext";

const DisplayFilterPriceDiv = () => {
  const { curSymbol, productShipValue } = useContext(NavigateContext);
  const { handleMinChange, handleMaxChange, filterOption } = useContext(DisplayContext);

  let min = productShipValue.min;
  let max = productShipValue.max;

  useEffect(() => {
    console.log(filterOption)
  }, [])

  return (
    <div className="productFilterMainDivs">
      <p className="productFilterText">Price</p>
      <div id="productFilterSlider">
        <input type="range" min={min} max={max} value={filterOption.minPrice} onChange={handleMinChange} className="filterPriceRange thumb thumb--left" />
        <input type="range" min={min} max={max} value={filterOption.maxPrice} onChange={handleMaxChange} className="filterPriceRange thumb thumb--right" />
        <div id="productFilterSliderTrack"></div>
        <div id="productFilterSliderRange" style={{ left: `${((filterOption.minPrice - min) / (max - min)) * 100}%`, right: `${100 - ((filterOption.maxPrice - min) / (max - min)) * 100}%` }}></div>
      </div>
      <div id="filterPriceInnerDiv">
        <p className="filterPriceValueTexts">{curSymbol}{productShipValue.minValue}</p>
        <p className="filterPriceValueTexts">{curSymbol}{productShipValue.maxValue}</p>
      </div>
    </div>
  );
};

export default DisplayFilterPriceDiv;