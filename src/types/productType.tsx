import { Dispatch, SetStateAction } from "react";

type CommonProductFields = {
  wishlistDate?: string;
  cutOff?: number;
  productDetails?: { cartSize?: string, cartColor?: string };
}

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ProductType = {
  productPrice?: number;
  priceOne?: number;
  priceTwo?: number;
  averagePrice?: number;
};

export type UserProductType = {
  id: number;
  productImage: string;
  productName: string;
  wishlistStock: number;
  cartAmt: number;
};

export type GeneralProductType = UserProductType & ProductType & CommonProductFields & {
  productInfo?: { id: number; name: string; type: string; links: { id: number; text: string; style?: boolean }[] }[];
  productDesc?: string;
  productAvailable?: string;
  productSizes?: { id: number; text: string; style: boolean }[];
  productColors?: { id: number; color: string; text: string; style: boolean }[];
  productImages?: { id: number; style: boolean; image: string }[]
};

export type CartProductType = UserProductType & ProductType & {
  cartSize?: string;
  cartColor?: string;
  productPrice: number;
};

export type WishlistProductType = UserProductType & ProductType & CommonProductFields;
