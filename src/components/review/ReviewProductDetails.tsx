import ReviewProductDetailsLink from "../layout/review-page/ReviewProductDetailsLink";

export default function ReviewProductDetails({ productInfo }: { productInfo: { id: number; name: string; type: string; links: { id: number; text: string; style?: boolean }[] }[] }) {
  return (
    <div className="productDeliveryDetails">
      {productInfo.map(({ id, name, type, links }) => {
        if (name === "SKU" || name === "CARTEGORIES") {
          return (
            <div key={id} className="productDeliveryDetailsTexts">
              <p>{name}:</p>
              <ReviewProductDetailsLink type={type} links={links} />
            </div>
          );
        }
      })}
    </div>
  );
};
