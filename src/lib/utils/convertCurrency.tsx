"use client";
import { ProductType, SetState } from "@/types/productType";

const changeCurrencyToDollar = <T extends ProductType>(productsArray: { array: T[]; setArray: SetState<T[]> }[]) => {
  productsArray.forEach(({ array, setArray }) => {
    const updatedValues = array.map((details): T => {
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

const changeCurrencyToNaira = <T extends ProductType>(productsArray: { array: T[]; setArray: SetState<T[]> }[]) => {
  productsArray.forEach(({ array, setArray }) => {
    const updatedValues = array.map((details): T => {
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
