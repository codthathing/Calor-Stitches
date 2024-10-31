import { useReviewEffect } from "./review_effect";

const ReviewColor = ({ productId, colorText, colorArray }) => {
  const { details, ChangeDetails, ChangeDetailsHover } = useReviewEffect(colorText, colorArray);

  return (
    <div id="productColorReview" className="productDivs">
      <p id="productColorText">Color {details.text}</p>
      <main id="productColorMain">
        {details.array.map(({ id, color, style, text }) => {
          return (
            <div key={id} onClick={() => ChangeDetails(id, "color")} onMouseEnter={() => ChangeDetailsHover(id, true)} onMouseLeave={() => ChangeDetailsHover(id, false)} className="product-color-size-div">
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

export default ReviewColor;