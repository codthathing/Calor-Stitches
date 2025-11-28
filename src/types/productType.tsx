import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ProductType = {
  productPrice?: number;
  priceOne?: number;
  priceTwo?: number;
  averagePrice?: number;
  [key: string]: any;
};

type UserProductType = {
  id: number;
  productImage: StaticImageData;
  productName: string;
  wishlistDate: string;
  wishlistStock: number;
  [key: string]: any;
};

export type GeneralProductType = UserProductType & ProductType & {
  productAvailable?: string;
  cutOff?: number;
  productDetails?: { cartSize?: string, cartColor?: string };
  productSizes?: { id: number; text: string; style: boolean }[];
  productColors?: { id: number; color: string; text: string; style: boolean }[];
};

export type CartProductType = UserProductType & ProductType & {
  cartSize: string;
  cartColor: string;
};

export type WishlistProductType = UserProductType & ProductType;
