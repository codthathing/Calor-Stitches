"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function ProductPrice({ priceMainClass, priceDivClass, productPriceClass, priceClass, cutOff, productPrice, averagePrice, priceOne, priceTwo }: { priceMainClass?: string; priceDivClass: string; productPriceClass: string; priceClass: string; cutOff?: number; productPrice?: number; averagePrice?: number; priceOne?: number; priceTwo?: number }) {
  const { curSymbol } = useNavigateContext();

  return (
    <div className={`priceDiv ${priceMainClass}`} style={{ justifyContent: priceDivClass }}>
      {cutOff && (
        <span className={`${priceClass} originalPrice`}>
          {curSymbol}
          {productPrice?.toFixed(2)}
        </span>
      )}
      <span className={priceClass} style={{ color: cutOff ? `${productPriceClass}` : "#222222" }}>
        {averagePrice ? `${curSymbol}${priceOne?.toFixed(2)} - ${curSymbol}${priceTwo?.toFixed(2)}` : productPrice && `${curSymbol}${(cutOff ? productPrice - (cutOff / 100) * productPrice : productPrice)?.toFixed(2)}`}
      </span>
    </div>
  );
};
