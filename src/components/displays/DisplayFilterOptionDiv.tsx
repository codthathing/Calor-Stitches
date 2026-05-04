"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ProductFiltersType } from "@/types/displayType";
import { Dispatch, SetStateAction } from "react";

interface DisplayFilterOptionDiv {
  filterText: string;
  productFunction: (id: number, option: boolean, text: string, productTypes: ProductFiltersType, setProductTypes: Dispatch<SetStateAction<ProductFiltersType>>) => void;
  productArray: ProductFiltersType;
  setProductArray: Dispatch<SetStateAction<ProductFiltersType>>;
  textLengthId: string;
  showColorDiv?: boolean;
  showFirstInput?: boolean;
  showSecondInput?: boolean;
  showTypeLength?: boolean;
  showSizeLength?: boolean;
  showColorLength?: boolean;
}

export default function DisplayFilterOptionDiv({ filterText, productFunction, productArray, setProductArray, textLengthId, showColorDiv, showFirstInput, showSecondInput, showTypeLength, showSizeLength, showColorLength } : DisplayFilterOptionDiv) {
  const { products } = useNavigateContext();

  const changeTextStyleHover = (id: number, toggle: boolean) => {
    const updatedTexts = productArray.map((text) => {
      if (text.option !== false) {
        return { ...text, style: text.id === id ? toggle : false };
      }
      return text;
    });
    setProductArray(updatedTexts);
  };

  return (
    <div className="productFilterMainDivs">
      <p className="productFilterText">{filterText}</p>
      <section className="productFilterSections">
        {productArray.map(({ id, text, color, option, style }) => {
          return (
            <div key={id} onMouseEnter={() => changeTextStyleHover(id, true)} onMouseLeave={() => changeTextStyleHover(id, false)} onClick={() => productFunction(id, option, text, productArray, setProductArray)} className="productFilterColorDiv">
              <div className="productFilterDivs">
                {showColorDiv && <div className="filterColorInnerDivs" style={{ backgroundColor: color }}></div>}
                {showFirstInput && <input type="checkbox" checked={style} readOnly className="filterCheckbox" />}
                <div className="filterTextsLength" id={textLengthId}>
                  <p>{text}</p>
                  {showTypeLength && <span>({products.filter(({ productInfo }) => productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.find(({ text: cartgory }) => cartgory === text)).length})</span>}
                  {showColorLength && <span>({products.filter(({ productColors }) => productColors?.find(({ text: colorText }) => colorText === text)).length})</span>}
                  {showSizeLength && <span>({products.filter(({ productSizes }) => productSizes?.find(({ text: sizeText }) => sizeText === text)).length})</span>}
                </div>
              </div>
              {showSecondInput && <input type="checkbox" checked={style} readOnly className="filterCheckbox" />}
            </div>
          );
        })}
      </section>
    </div>
  );
};
