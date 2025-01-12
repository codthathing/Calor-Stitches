import { useContext } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import SearchSection from "../../features/search/SearchSection";
import ViewSection from "../../features/view/ViewSection";
import WishlistSection from "../../features/wishlist/WishlistSection";
import CartSection from "../../features/cart/CartSection";

const PageFeatures = () => {
  const location = decodeURIComponent(useLocation().pathname);
  const { search, wishList: wishlist, cart, view } = useContext(NavigateContext);

  return (
    <Routes>
      {(view || search || wishlist) && (
        <Route
          path={location}
          element={
            <>
              {search && <SearchSection />}
              {view && <ViewSection />}
              {wishlist && <WishlistSection />}
            </>
          }
        />
      )}
      {cart && <Route path={location} element={<CartSection />} />}
    </Routes>
  );
};

export default PageFeatures;
