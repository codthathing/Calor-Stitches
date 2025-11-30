"use client";
import { useReviewEffect } from "@/hooks/useReviewEffect";

interface ReviewSize {
  productId: number;
  sizeText?: string;
  sizeArray?: { id: number; style: boolean; text: string }[];
}

export default function ReviewSizeDiv({ productId, sizeText, sizeArray }: ReviewSize) {
  const { details, changeDetails, changeDetailsHover } = useReviewEffect(productId, "size", sizeText, sizeArray);

  return (
    <div className="productDivs">
      <div className="productSizeDiv">
        <p className="productSizeText">
          Size <span style={{ textTransform: "uppercase" }}>{details!.text}</span>
        </p>
        <p className="productSizeText">SIZE CHARTS</p>
      </div>
      <main className="product-color-size-div">
        {details!.array!.map(({ id, text, style }) => {
          return (
            <p key={id} style={{ border: style ? "1px solid #616161" : "none" }} onClick={() => changeDetails(id)} onMouseEnter={() => changeDetailsHover(id, true)} onMouseLeave={() => changeDetailsHover(id, false)} className="productSizeMainText">
              {text}
            </p>
          );
        })}
      </main>
    </div>
  );
};
