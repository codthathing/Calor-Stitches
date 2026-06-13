"use client";
import { useEffect } from "react";
import { CartProductType, WishlistProductType } from "@/types/productType";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export const useUpdateProducts = () => {
  const { cartItems, products, setCartItems, wishlistItems, setWishlistItems, setCloneCart } = useNavigateContext();

  useEffect(() => {
    const updatedCart = cartItems.map(({ productName, cartSize, cartColor, ...rest }) => {
        const product = products.find(({ productName: name }) => name === productName);

        if (!product) return undefined;

        const { wishlistStock, productSizes, productColors } = product;

        if (wishlistStock === 0) return undefined;
        if (cartSize && productSizes && !productSizes.some(({ text }) => text === cartSize)) return undefined;
        if (cartColor && productColors && !productColors.some(({ text }) => text === cartColor)) return undefined;

        return { ...rest, productName, cartSize, cartColor, wishlistStock } as CartProductType;
      }).filter((item): item is CartProductType => item !== undefined);

    if (JSON.stringify(updatedCart) !== JSON.stringify(cartItems)) setCartItems(updatedCart);

    const updatedWishlist = wishlistItems.map(({ productName, ...rest }) => {
        const product = products.find(({ productName: name }) => name === productName);

        if (!product) return undefined;

        return { ...rest, productName, wishlistStock: product.wishlistStock} as WishlistProductType;
      }).filter((item): item is WishlistProductType => item !== undefined);

    if (JSON.stringify(updatedWishlist) !== JSON.stringify(wishlistItems)) setWishlistItems(updatedWishlist);

    setCloneCart(cartItems);
  }, [cartItems, wishlistItems, products]);
};
