"use client";
import ProductOptions from "@/components/product-template/ProductOptions";
import { WishlistProductType } from "@/types/productType";

interface UserWishlist {
  id: number;
  productDetails?: { cartSize?: string, cartColor?: string };
  productName: string;
  wishlistItems: WishlistProductType[];
}

export default function UserWishlistTemplateOptions({ id, productDetails, productName, wishlistItems }: UserWishlist) {
  return <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"wishlist-cart-btn"} itemsArray={wishlistItems} />;
}
