import ProductPrice from "../product-template/ProductPrice";

interface ReviewDetails {
  productReview: boolean;
  priceMainClass?: string;
  productName: string;
  cutOff?: number;
  productPrice?: number;
  averagePrice?: number;
  priceOne?: number;
  priceTwo?: number;
  productDesc?: string;
}

export default function ReviewDetails({ productReview, priceMainClass, productName, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc }: ReviewDetails) {
  return (
    <div className="productDetailsDiv">
      <p className="productDetailName">{productName}</p>
      {(productPrice || averagePrice) && <ProductPrice priceMainClass={priceMainClass} priceDivClass={"start"} productPriceClass={"#FF0000"} priceClass={"productDetailPrice"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />}
      {productReview && <p id="productDetailReview">(0 customer review / Add review)</p>}
      <p className="productDetailDesc">{productDesc}</p>
    </div>
  );
};
