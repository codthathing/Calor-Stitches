export default function ProductTopics({ productTopicsArray }: { productTopicsArray: string[] }) {
  return (
    <div className="product-wishlist-cart-topics">
      {productTopicsArray.map((topics, index) => {
        return <p key={index} className="wishlistCartTopicTexts">{topics}</p> 
      })}
    </div>
  );
};
