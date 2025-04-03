import { useContext } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import SearchSection from "../../features/search/SearchSection";
import ViewSection from "../../features/view/ViewSection";
import WishlistSection from "../../features/wishlist/WishlistSection";
import CartSection from "../../features/cart/CartSection";
import SignInLayout from "../../features/(sign-in)/SignInLayout";

const PageFeatures = () => {
  const location = decodeURIComponent(useLocation().pathname);
  const { search, wishList: wishlist, cart, view, account } = useContext(NavigateContext);

  if (view || search || wishlist || cart || account) {
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
        {account && <Route path={location} element={<SignInLayout />} />}
        {cart && <Route path={location} element={<CartSection />} />}
      </Routes>
    );
  };
};

export default PageFeatures;
