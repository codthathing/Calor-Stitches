import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateContext";
import { useSectionScroll } from "../../../hooks/useSectionScroll";
import { useNavigateToPage } from "../../../hooks/useNavigateToPage";
import WishlistActionText from "./WishlistActionText";
import WishlistProductDiv from "./WishlistProductDiv";
import { scrollToSection } from "../../../utils/scrollToSection";
import PageButtons from "../../common/PageButtons";
import { FaTimes } from "react-icons/fa";

export default function WishlistPage() {
  const { setWishList, wishlistItems, product_section } = useContext(NavigateContext);
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
