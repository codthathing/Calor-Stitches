"use client";
import NavigationLink from "@/components/common/NavigationLink";
import PageButtons from "@/components/common/PageButtons";
import { useRouter } from "next/navigation";

export default function UserWishlistFooter() {
  const router = useRouter();

  return (
    <footer className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
      <NavigationLink href={"/wishlist"}><PageButtons type={"text"} text={"open wishlist page"} /></NavigationLink>
      <PageButtons
        type={"text"}
        text={"continue shopping"}
        buttonFunction={() => {
          router.back();
          // router.refresh();
        }}
      />
    </footer>
  )
}