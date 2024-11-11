import { useReviewEffect } from "./review_effect";

const ReviewSize = ({ productId, sizeText, sizeArray }) => {
  const { details, ChangeDetails, ChangeDetailsHover } = useReviewEffect(productId, "size", sizeText, sizeArray);

  return (
    <div className="productDivs">
      <div className="productSizeDiv">
        <p className="productSizeText">Size <span style={{textTransform: "uppercase"}}>{details.text}</span></p>
        <p className="productSizeText">SIZE CHARTS</p>
      </div>
      <main className="product-color-size-div">
        {details.array.map(({ id, text, style }) => {
          return <p key={id} style={{ border: style ? "1px solid #616161" : "none" }} onClick={() => ChangeDetails(id)} onMouseEnter={() => ChangeDetailsHover(id, true)} onMouseLeave={() => ChangeDetailsHover(id, false)} className="productSizeMainText">{text}</p>
        })}
      </main>
    </div>
  );
};

export default ReviewSize;