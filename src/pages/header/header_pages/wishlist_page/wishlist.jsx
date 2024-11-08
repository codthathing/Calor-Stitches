import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../../usescroll";
import { ToggleRegister } from "../../../contextpage";
import WishlistInfoText from "./wishlist_info_text";
import WishlistSection from "./wishlist_section";

const WishList = () => {
  const { setWishList, wishlistItems } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");

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
          <Link to="/shop/wishlist" className="wishListLinks">OPEN WISHLIST PAGE</Link>
          <a href="#productSection" className="wishListLinks" onClick={() => setWishList(false)}>CONTINUE SHOPPING</a>
        </div>
      </main>
    </section>
  );
}

export default WishList;