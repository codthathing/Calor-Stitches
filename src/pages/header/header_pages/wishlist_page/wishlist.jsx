import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../../usescroll";
import { ToggleRegister } from "../../../contextpage";
import WishlistInfoText from "./wishlist_info_text";
import WishlistSection from "./wishlist_section";
import { useScrollToSection } from "../../../components/use_show_section";
import PageButtons from "../../../components/page_buttons";

const WishList = () => {
  const { setWishList, wishlistItems, product_section } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const { scrollToSection } = useScrollToSection(product_section);
  const navigate = useNavigate();


  return (
    <section id="wishListSection" className="navSections">
      <main ref={addScroll} id="wishListMain">
        <header className="wishListContainers" id="wishListHeader">
          <div id="wishlistHeaderDiv" className="wishlistInnerContainers">
            <p id="wishListText">Wishlist ({wishlistItems.length})</p>
            <span ref={removeScroll} id="wishListCancel" onClick={() => setWishList(false)}><i id="wishListCanIcon" className="fa-solid fa-xmark"></i></span>
          </div>
          <WishlistInfoText />
        </header>
        <WishlistSection />
        <div className="wishListContainers wishlistInnerContainers" id="wishListLinkDiv">
          <PageButtons type={"text"} buttonFunction={() => navigate("/shop/wishlist")} text={"open wishlist page"} />
          <PageButtons type={"text"} buttonFunction={() => {
            setWishList(false);
            scrollToSection();
          }} text={"continue shopping"} />
        </div>
      </main>
    </section>
  );
}

export default WishList;