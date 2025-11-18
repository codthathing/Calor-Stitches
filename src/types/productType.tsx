import { Dispatch, SetStateAction } from "react";

export type ProductType = {
  priceOne?: number;
  priceTwo?: number;
  averagePrice?: number;
  productPrice?: number;
  [key: string]: any;
};

type UserProductType = {
  productName: string;
  wishlistStock: number;
  [key: string]: any;
};

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type GeneralProductType = UserProductType & {
  productSizes?: { id: number; text: string; style: boolean }[];
  productColors?: { id: number; color: string; text: string; style: boolean }[];
};

export type CartProductType = UserProductType & ProductType & {
  cartSize: string;
  cartColor: string;
};

export type WishlistProductType = UserProductType & ProductType;
