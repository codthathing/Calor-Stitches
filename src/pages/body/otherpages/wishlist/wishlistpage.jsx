import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import WishlistProductSection from "./wishlist_product_section";
import WishlistHandle from "./wishlist_handle";

const WishListPage = () => {

  const { setWishList } = useContext(ToggleRegister);
  usePageInitialEffects({effectsArray: [{ effect: setWishList, value: false }]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "CS wishlist", linkArrow: false },
  ]

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productWishlistCartMain">
        <WishlistProductSection />
        <WishlistHandle className={"desktop-center"} />
      </main>
    </div>
  );
}

export default WishListPage;