import { useContext, useEffect } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../components/pagelinks";
import WishlistProductSection from "./wishlist_product_section";
import WishlistHandle from "./wishlist_handle";

const WishListPage = () => {

  const { setNavbar, setWishList, setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    setNavbar(true);
    setWishList(false);
    setToggleSideMenu(false);
    window.scrollTo(0, 0);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "CS wishlist", linkArrow: false },
  ]

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main className="productWishlistCartMain">
        <WishlistProductSection />
        <WishlistHandle />
      </main>
    </div>
  );
}

export default WishListPage;