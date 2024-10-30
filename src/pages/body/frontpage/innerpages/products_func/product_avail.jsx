const ProductAvail = ({doubleAvailColor, doubleProductAvail, productAvailable, productAvailableColor}) => {
  return (
    <div className="availDiv">
      {doubleProductAvail && <span className="productAvail paragraphStyles" style={{ backgroundColor: doubleAvailColor }}>{doubleProductAvail}</span>}
      {productAvailable && <span className="productAvail paragraphStyles" style={{ backgroundColor: productAvailableColor }}>{productAvailable}</span>}
    </div>
  );
};

export default ProductAvail;