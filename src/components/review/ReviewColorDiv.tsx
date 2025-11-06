import { useReviewEffect } from "../../hooks/useReviewEffect";

const ReviewColorDiv = ({ productId, colorText, colorArray }) => {
  const { details, changeDetails, changeDetailsHover } = useReviewEffect(productId, "color", colorText, colorArray);

  return (
    <div id="productColorReview" className="productDivs">
      <p id="productColorText">Color {details.text}</p>
      <main id="productColorMain">
        {details.array.map(({ id, color, style, text }) => {
          return (
            <div key={id} onClick={() => changeDetails(id)} onMouseEnter={() => changeDetailsHover(id, true)} onMouseLeave={() => changeDetailsHover(id, false)} className="product-color-size-div">
              <div className="color-div" style={{ border: style ? `1px solid ${color}` : "none" }}>
                <div className="productColorInnerDiv" style={{ backgroundColor: color }}></div>
              </div>
              <p className="productColorInnerText">{text}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ReviewColorDiv;
