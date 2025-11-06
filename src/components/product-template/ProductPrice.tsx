import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";

const ProductPrice = ({ priceMainClass, priceDivClass, productPriceClass, priceClass, cutOff, productPrice, averagePrice, priceOne, priceTwo }) => {
  const { curSymbol } = useContext(NavigateContext);

  return (
    <div className={`priceDiv ${priceMainClass}`} style={{ justifyContent: priceDivClass }}>
      {cutOff && <span className={`${priceClass} originalPrice`}>{curSymbol}{productPrice?.toFixed(2)}</span>}
      <span className={priceClass} style={{ color: cutOff ? `${productPriceClass}` : "#222222" }}>
        {averagePrice ? `${curSymbol}${priceOne?.toFixed(2)} - ${curSymbol}${priceTwo?.toFixed(2)}` : `${curSymbol}${(cutOff ? (productPrice - ((cutOff / 100) * productPrice)) : productPrice)?.toFixed(2)}`}
      </span>
    </div>
  );
};

export default ProductPrice;