const ProductTopics = ({id, productTopicsArray}) => {
  return (
    <div id={id}>
      {productTopicsArray.map((topics) => {
        return <p key={topics} className="wishlistCartTopicTexts">{topics}</p> 
      })}
    </div>
  );
};

export default ProductTopics;