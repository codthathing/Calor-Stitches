"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ProductFilterDiv({ id, defaultText, filterText, textOne, textTwo }: { id?: string; defaultText?: string; filterText?: { id: number; text: string; style: boolean }[]; textOne?: boolean; textTwo?: boolean }) {
  const [showFilterDiv, setShowFilterDiv] = useState<boolean>(false);

  const defaultTexts: { id: number; text: string; style: boolean }[] = [
    { id: 0, text: "Best selling", style: false },
    { id: 1, text: "Rating", style: false },
    { id: 2, text: "Aphabetically, A to Z", style: false },
    { id: 3, text: "Aphabetically, Z to A", style: false },
    { id: 4, text: "Price, low to high", style: false },
    { id: 5, text: "Price, high to low", style: false },
    { id: 6, text: "Date, old to new", style: false },
    { id: 7, text: "Date, new to old", style: true },
  ];

  const [presentFilter, setPresentFilter] = useState({ text: defaultText || "Date, new to old", array: filterText || defaultTexts });

  const changeText = (id: number) => {
    const newText = presentFilter.array.find((text) => text.id === id) as { id: number; text: string; style: boolean };
    const newArray = presentFilter.array.map((text) => {
      return { ...text, style: text.id === id };
    });

    setPresentFilter({ text: newText.text, array: newArray });
  };

  const changeTextStyleHover = (id: number, toggle: boolean) => {
    const updatedArray = presentFilter.array.map((text) => {
      if (text.text !== presentFilter.text) {
        return { ...text, style: text.id === id ? toggle : false };
      }
      return text;
    });

    setPresentFilter({ ...presentFilter, array: updatedArray });
  };

  return (
    <div className="productFilterDiv">
      <div id={id} className="productTexIcontDiv" onClick={() => setShowFilterDiv(!showFilterDiv)}>
        {textOne && <p className="productTexts">{presentFilter.text}</p>}
        <FaChevronDown className="productIcons" />
        {textTwo && <p className="productTexts">{presentFilter.text}</p>}
      </div>
      {showFilterDiv && <div className="productInnerDivs">
        {presentFilter.array.map(({ id, text, style }) => {
          return (
            <p key={id} onClick={() => changeText(id)} onMouseEnter={() => changeTextStyleHover(id, true)} onMouseLeave={() => changeTextStyleHover(id, false)} className="productFilterTexts" style={{ backgroundColor: style ? "#222222" : "#FFFFFF", color: style ? "#FFFFFF" : "#222222" }}>{text}</p>
          );
        })}
      </div>}
    </div>
  );
};
