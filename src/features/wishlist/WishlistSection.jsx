import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import WishlistActionText from "./WishlistActionText";
import WishlistProductDiv from "./WishlistProductDiv";
import { scrollToSection } from "../../utils/scrollToSection";
import PageButtons from "../../components/common/PageButtons";

const WishlistSection = () => {
  const { setWishList, wishlistItems, product_section } = useContext(NavigateContext);
  const { presentScroll } = useSectionScroll();
  const navigate = useNavigate();

  return (
    <section id="wishListSection" className="navSections">
      <main ref={presentScroll} id="wishListMain">
        <header className="wishListContainers" id="wishListHeader">
          <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
            <p id="wishListText">Wishlist ({wishlistItems.length})</p>
            <span id="wishListCancel" onClick={() => setWishList(false)}>
              <i id="wishListCanIcon" className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <WishlistActionText />
        </header>
        <WishlistProductDiv />
        <div className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
          <PageButtons type={"text"} buttonFunction={() => navigate("/shop/wishlist")} text={"open wishlist page"} />
          <PageButtons
            type={"text"}
            buttonFunction={() => {
              setWishList(false);
              scrollToSection(product_section);
            }}
            text={"continue shopping"}
          />
        </div>
      </main>
    </section>
  );
};

export default WishlistSection;
