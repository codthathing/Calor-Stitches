"use client";
import { FaTimes } from "react-icons/fa";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { scrollToSection } from "@/lib/utils/scrollToSection";
import PageButtons from "@/components/common/PageButtons";
import WishlistActionText from "@/components/layout/user-wishlist/WishlistActionText";
import WishlistProductDiv from "@/components/layout/user-wishlist/WishlistProductDiv";

export default function WishlistPage() {
  const { setWishList, wishlistItems, product_section } = useNavigateContext();
  const { presentScroll } = useSectionScroll();
  const navigate = useNavigateToPage();

  return (
    <section className="navSections">
      <main ref={presentScroll} id="wishListMain">
        <header className="wishListContainers" id="wishListHeader">
          <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
            <p id="wishListText">Wishlist ({wishlistItems.length})</p>
            <span id="wishListCancel" onClick={() => setWishList(false)}>
              <FaTimes id="wishListCanIcon" />
            </span>
          </div>
          <WishlistActionText />
        </header>
        <WishlistProductDiv />
        <div className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
          <PageButtons type={"text"} buttonFunction={() => {
            navigate("/shop/wishlist");
            setWishList(false);
          }} text={"open wishlist page"} />
          <PageButtons type={"text"} text={"continue shopping"}
            buttonFunction={() => {
              setWishList(false);
              scrollToSection(product_section);
            }}
          />
        </div>
      </main>
    </section>
  );
}
