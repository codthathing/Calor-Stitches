"use client";
import { ProductType } from "@/types/productType";

const changeCurrencyToDollar = <T extends ProductType>(array: T[]): T[] => {
  return array.map((details): T => {
    return {
      ...details,
      priceOne: details?.priceOne ? details.priceOne / 1000 : 0,
      priceTwo: details?.priceTwo ? details.priceTwo / 1000 : 0,
      averagePrice: details?.averagePrice ? details.averagePrice / 1000 : undefined,
      productPrice: details?.productPrice ? details.productPrice / 1000 : 0,
    };
  });
};

const changeCurrencyToNaira = <T extends ProductType>(array: T[]): T[] => {
  return array.map((details): T => {
    return {
      ...details,
      priceOne: details?.priceOne ? details.priceOne * 1000 : 0,
      priceTwo: details?.priceTwo ? details.priceTwo * 1000 : 0,
      averagePrice: details?.averagePrice ? details.averagePrice * 1000 : undefined,
      productPrice: details?.productPrice ? details.productPrice * 1000 : 0,
    };
  });
};

export { changeCurrencyToDollar, changeCurrencyToNaira };