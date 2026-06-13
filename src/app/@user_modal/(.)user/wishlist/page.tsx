"use client";
import { FaTimes } from "react-icons/fa";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageButtons from "@/components/common/PageButtons";
import WishlistActionText from "@/components/layout/user-wishlist/WishlistActionText";
import WishlistProductDiv from "@/components/layout/user-wishlist/WishlistProductDiv";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCookie } from "@/hooks/usePreviousPath";

export default function WishlistPage() {
  const { wishlistItems } = useNavigateContext();
  const router = useRouter();

  return (
    <main id="wishListMain">
      <header className="wishListContainers" id="wishListHeader">
        <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
          <p id="wishListText">Wishlist ({wishlistItems.length})</p>
          <span id="wishListCancel" onClick={() => {
            router.back();
            if (!decodeURIComponent(getCookie("previousPath") ?? "/").includes("/user")) router.refresh()
          }}>
            <FaTimes id="wishListCanIcon" />
          </span>
        </div>
        <WishlistActionText />
      </header>
      <WishlistProductDiv />
      <div className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
        <Link href={"/wishlist"} style={{ textDecoration: "none" }}><PageButtons type={"text"} text={"open wishlist page"} /></Link>
        <PageButtons
          type={"text"}
          text={"continue shopping"}
          buttonFunction={() => {
            router.back();
            router.refresh();
          }}
        />
      </div>
    </main>
  );
}
