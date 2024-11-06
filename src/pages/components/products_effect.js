import { useContext, useEffect } from "react";
import { ToggleRegister } from "../contextpage";

export const useProductEffect = () => {
  const { cartItems, products, setCartItems, wishlistItems, setWishlistItems, setCloneCart } = useContext(ToggleRegister);

  useEffect(() => {

    const updatedCart = cartItems.map(({ productName, cartSize, cartColor, ...rest }) => {
      const product = products.find(({ productName: name }) => name === productName);
      if (product) {
        const { wishlistStock, productSizes, productColors } = product;
        if (wishlistStock === 0) {
          return null;
        } else if (productSizes && !productSizes.some(({ text }) => text === cartSize)) {
          return null;
        } else if (productColors && !productColors.some(({ text }) => text === cartColor)) {
          return null;
        } else {
          return { productName, wishlistStock, cartSize, cartColor, ...rest }
        }
      } else {
        return null;
      };
    }).filter(Boolean);

    if (JSON.stringify(updatedCart) !== JSON.stringify(cartItems)) {
      setCartItems(updatedCart);
    };


    const updatedWishlist = wishlistItems.map(({ productName, ...rest }) => {
      for (let i = 0; i < products.length; i++) {
        const { productName: productNameText, wishlistStock } = products[i];
        if (productNameText === productName) {
          return { ...rest, productName, wishlistStock: wishlistStock };
        };
      };
    });

    if (JSON.stringify(updatedWishlist) !== JSON.stringify(wishlistItems)) {
      setWishlistItems(updatedWishlist);
    };

    setCloneCart(cartItems);
  }, [cartItems, wishlistItems, cartItems]);
};