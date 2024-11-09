import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { DisplayContext } from "./productdisplay";

const ProductPrice = () => {
  const { curSymbol, productShipValue } = useContext(ToggleRegister);
  const { handleMinChange, handleMaxChange} = useContext(DisplayContext);

  let min = productShipValue.min;
  let max = productShipValue.max;

  return (
    <div className="productFilterMainDivs">
      <p className="productFilterText">Price</p>
      <div id="productFilterSlider">
        <input type="range" min={min} max={max} value={productShipValue.minValue} onChange={handleMinChange} className="filterPriceRange thumb thumb--left" />
        <input type="range" min={min} max={max} value={productShipValue.maxValue} onChange={handleMaxChange} className="filterPriceRange thumb thumb--right" />
        <div id="productFilterSliderTrack"></div>
        <div id="productFilterSliderRange" style={{ left: `${((productShipValue.minValue - min) / (max - min)) * 100}%`, right: `${100 - ((productShipValue.maxValue - min) / (max - min)) * 100}%` }}></div>
      </div>
      <div id="filterPriceInnerDiv">
        <p className="filterPriceValueTexts">{curSymbol}{productShipValue.minValue}</p>
        <p className="filterPriceValueTexts">{curSymbol}{productShipValue.maxValue}</p>
      </div>
    </div>
  );
};

export default ProductPrice;