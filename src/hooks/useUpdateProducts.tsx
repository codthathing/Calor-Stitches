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
      if (wishlistStock === 0 || (productSizes && productSizes.some(({ text }) => text === cartSize)) || (productColors && productColors.some(({ text }) => text === cartColor))) return;
      
      return { ...rest, productName, cartSize, cartColor, wishlistStock } as CartProductType;
    }).filter((item): item is CartProductType => item !== undefined);

    if (JSON.stringify(updatedCart) !== JSON.stringify(cartItems)) setCartItems(updatedCart);

    const updatedWishlist = wishlistItems.map(({ productName, ...rest }) => {
        const product = products.find(({ productName: name }) => name === productName);

        if (!product) return undefined;

        const { wishlistStock } = product;

        return { ...rest, productName, wishlistStock };
    }).filter((item): item is WishlistProductType => item !== undefined);

    if (JSON.stringify(updatedWishlist) !== JSON.stringify(wishlistItems)) setWishlistItems(updatedWishlist);

    setCloneCart(cartItems);
  }, [cartItems, wishlistItems]);
};
