export type ProductType = {
  priceOne?: number;
  priceTwo?: number;
  averagePrice?: number;
  productPrice?: number;
  [key: string]: any;
};

export type GeneralProductType = {
  productName: string;
  wishlistStock: number;
  productSizes?: { id: number; text: string; style: boolean }[];
  productColors?: { id: number; color: string; text: string; style: boolean }[];
  [key: string]: any;
};

export type CartProductType = {
  productName: string;
  cartSize: string;
  cartColor: string;
  wishlistStock: number;
  [key: string]: any;
};

export type WishlistProductType = {
  productName: string;
  wishlistStock: number;
  [key: string]: any;
};
