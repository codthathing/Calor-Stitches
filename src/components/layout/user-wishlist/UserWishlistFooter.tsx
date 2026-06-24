"use client";
import PageButtons from "@/components/common/PageButtons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserWishlistFooter() {
  const router = useRouter();

  return (
    <footer className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
      <Link href={"/wishlist"} style={{ textDecoration: "none" }}><PageButtons type={"text"} text={"open wishlist page"} /></Link>
      <PageButtons
        type={"text"}
        text={"continue shopping"}
        buttonFunction={() => {
          router.back();
          router.refresh();
        }}
      />
    </footer>
  )
}