import { useEffect, useState } from "react";

const ReviewColor = ({ colorText, colorArray }) => {
  const [colorDetails, setColorDetails] = useState({ colorText: colorText, colorArray: colorArray });
  useEffect(() => {
    setColorDetails({ colorText: colorText, colorArray: colorArray });
  }, []);

  const ChangeColor = (id) => {
    const newColor = colorDetails.colorArray.find((color) => color.id === id);
    const newArray = colorDetails.colorArray.map((colors) => {
      if (colors.id === id) {
        return { ...colors, style: true };
      } else {
        return { ...colors, style: false };
      };
    });
    setColorDetails({ colorText: newColor.colorText, colorArray: newArray });
  };

  const ChangeColorHover = (id, toggle) => {
    const newArray = colorDetails.colorArray.map((colors) => {
      if (colors.id === id && colors.colorText !== colorDetails.colorText) {
        return { ...colors, style: toggle };
      } else {
        return colors;
      };
    });
    setColorDetails({ ...colorDetails, colorArray: newArray });
  };

  return (
    <div id="productColorReview" className="productDivs">
      <p id="productColorText">Color {colorDetails.colorText}</p>
      <main id="productColorMain">
        {colorDetails.colorArray.map(({ id, color, style, colorText }) => {
          return (
            <div key={id} onClick={() => ChangeColor(id)} onMouseEnter={() => ChangeColorHover(id, true)} onMouseLeave={() => ChangeColorHover(id, false)} className="productColorDiv">
              <div className="color-div" style={{ border: style ? `1px solid ${color}` : "" }}>
                <div className="productColorInnerDiv" style={{ backgroundColor: `${color}` }}></div>
              </div>
              <p className="productColorInnerText">{colorText}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ReviewColor;