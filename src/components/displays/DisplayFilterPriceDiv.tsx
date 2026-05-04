"use client";
import { useDisplayContext } from "@/store/providers/DisplayProvider";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function DisplayFilterPriceDiv() {
  const { curSymbol, productShipValue } = useNavigateContext();
  const { handleMinChange, handleMaxChange, filterOption } = useDisplayContext();

  let min = productShipValue.min;
  let max = productShipValue.max;

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
        <p className="filterPriceValueTexts">{curSymbol}{filterOption.minPrice}</p>
        <p className="filterPriceValueTexts">{curSymbol}{filterOption.maxPrice}</p>
      </div>
    </div>
  );
};
