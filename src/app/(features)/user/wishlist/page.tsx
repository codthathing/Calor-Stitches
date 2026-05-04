"use client";
import { FaTimes } from "react-icons/fa";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { scrollToSection } from "@/lib/utils/scrollToSection";
import PageButtons from "@/components/common/PageButtons";
import WishlistActionText from "@/components/layout/user-wishlist/WishlistActionText";
import WishlistProductDiv from "@/components/layout/user-wishlist/WishlistProductDiv";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const { wishlistItems, product_section } = useNavigateContext();
  const { presentScroll } = useSectionScroll();
  const navigate = useNavigateToPage();
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
        <PageButtons type={"text"} buttonFunction={() => {
          navigate("/shop/wishlist");
        }} text={"open wishlist page"} />
        <PageButtons type={"text"} text={"continue shopping"}
          buttonFunction={() => {
            scrollToSection(product_section);
          }}
        />
      </div>
    </main>
  );
}
