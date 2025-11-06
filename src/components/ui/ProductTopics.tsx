const ProductTopics = ({ productTopicsArray}) => {
  return (
    <div className="product-wishlist-cart-topics">
      {productTopicsArray.map((topics) => {
        return <p key={topics} className="wishlistCartTopicTexts">{topics}</p> 
      })}
    </div>
  );
};

export default ProductTopics;