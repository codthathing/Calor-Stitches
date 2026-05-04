"use client";
import { FaTimes } from "react-icons/fa";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { scrollToSection } from "@/lib/utils/scrollToSection";
import PageButtons from "@/components/common/PageButtons";
import WishlistActionText from "@/components/layout/user-wishlist/WishlistActionText";
import WishlistProductDiv from "@/components/layout/user-wishlist/WishlistProductDiv";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems, product_section } = useNavigateContext();
  const { presentScroll } = useSectionScroll();
  const router = useRouter();

  return (
    <main ref={presentScroll} id="wishListMain">
      <header className="wishListContainers" id="wishListHeader">
        <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
          <p id="wishListText">Wishlist ({wishlistItems.length})</p>
          <span id="wishListCancel" onClick={() => router.back()}>
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
            scrollToSection(product_section);
          }}
        />
      </div>
    </main>
  );
}
