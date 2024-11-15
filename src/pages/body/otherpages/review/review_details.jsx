import ProductPrice from "../../frontpage/innerpages/products_func/product_price";

const ReviewDetails = ({productReview, priceMainClass, productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc}) => {
  return (
    <div className="productDetailsDiv">
      <p className="productDetailName">{productNameText}</p>
      {(productPrice || averagePrice) && <ProductPrice priceMainClass={priceMainClass} priceDivClass={"start"} productPriceClass={"#FF0000"} priceClass={"productDetailPrice"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />}
      {productReview && <p id="productDetailReview">(0 customer review / Add review)</p>}
      <p className="productDetailDesc">{productDesc}</p>
    </div>
  );
};

export default ReviewDetails;