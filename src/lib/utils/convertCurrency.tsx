"use client";
import { ProductType } from "@/types/productType";
import { Dispatch, SetStateAction } from "react";

const changeCurrencyToDollar = (productsArray: { array: ProductType[]; setArray: Dispatch<SetStateAction<ProductType[]>> }[]) => {
  productsArray.forEach(({ array, setArray }) => {
    const updatedValues = array.map((details): ProductType => {
      return {
        ...details,
        priceOne: details?.priceOne ? details.priceOne / 1000 : 0,
        priceTwo: details?.priceTwo ? details.priceTwo / 1000 : 0,
        averagePrice: details?.averagePrice ? details.averagePrice / 1000 : undefined,
        productPrice: details?.productPrice ? details.productPrice / 1000 : 0,
      };
    });

    setArray(updatedValues);
  });
};

const changeCurrencyToNaira = (productsArray: { array: ProductType[]; setArray: Dispatch<SetStateAction<ProductType[]>> }[]) => {
  productsArray.forEach(({ array, setArray }) => {
    const updatedValues = array.map((details): ProductType => {
      return {
        ...details,
        priceOne: details?.priceOne ? details.priceOne * 1000 : 0,
        priceTwo: details?.priceTwo ? details.priceTwo * 1000 : 0,
        averagePrice: details?.averagePrice ? details.averagePrice * 1000 : undefined,
        productPrice: details?.productPrice ? details.productPrice * 1000 : 0,
      };
    });

    setArray(updatedValues);
  });
};

export { changeCurrencyToDollar, changeCurrencyToNaira };
