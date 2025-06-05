import { lazy, Suspense, useContext } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import ViewSection from "../../features/view/ViewSection";
const SearchSection = lazy(() => import("../../features/search/SearchSection"));
const WishlistSection = lazy(() => import("../../features/wishlist/WishlistSection"));
const CartSection = lazy(() => import("../../features/cart/CartSection"));
const SignInLayout = lazy(() => import("../../features/(sign-in)/SignInLayout"));

const PageFeatures = () => {
  const location = decodeURIComponent(useLocation().pathname);
  const { search, wishList: wishlist, cart, view, account } = useContext(NavigateContext);

  if (view || search || wishlist || cart || account) {
    return (
      <Suspense fallback={null}>
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
      </Suspense>
    );
  }
};

export default PageFeatures;
