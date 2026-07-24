"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import WishlistActionText from "./WishlistActionText";

export default function UserWishlistHeader() {
  const { wishlistItems } = useNavigateContext();
  const router = useRouter();

  return (
    <header className="wishListContainers" id="wishListHeader">
      <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
        <p id="wishListText">Wishlist ({wishlistItems.length})</p>
        <span id="wishListCancel" onClick={() => router.back()}>
          <FaTimes id="wishListCanIcon" />
        </span>
      </div>
      <WishlistActionText />
    </header>
  );
}
