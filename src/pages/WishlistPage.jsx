import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import WishlistProductSection from "../components/wishlist/WishlistProductSection";
import WishlistHandle from "../components/wishlist/WishlistHandle";

const WishlistPage = () => {

  const { setWishList, setSearch } = useContext(NavigateContext);
  usePageLoadEffects({effectsArray: [{ effect: setWishList, value: false }, { effect: setSearch, value: false }]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "CS wishlist", linkArrow: false },
  ]

  return (
    <div className="otherPages">
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main className="productWishlistCartMain">
        <WishlistProductSection />
        <WishlistHandle className={"desktop-center"} />
      </main>
    </div>
  );
}

export default WishlistPage;