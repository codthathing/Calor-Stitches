"use client";
import DefaultText from "@/components/common/DefaultText";
import WishlistProductTemplate from "./WishlistProductTemplate";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function WishlistProductDiv() {
  const { wishlistItems } = useNavigateContext();

  return <div id="wishListItemSection">{wishlistItems.length > 0 ? <WishlistProductTemplate wishlistItems={wishlistItems} /> : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />}</div>;
};
