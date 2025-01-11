import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { NavigateContext } from "./services/contexts/NavigateContext";
import { useHeadEffect } from "./hooks/useHeadEffect";
import { useUpdateProducts } from "./hooks/useUpdateProducts";
import PagePreLoad from "./components/ui/PagePreload";
import PageLayout from "./components/layout/PageLayout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NewsSection from "./components/news-letter/NewsSection";
import WishlistSection from "./features/wishlist/WishlistSection";
import SearchSection from "./features/search/SearchSection";
import CartSection from "./features/cart/CartSection";
import ViewSection from "./features/view/ViewSection";

const App = () => {
  const { search, wishList, cart, view } = useContext(NavigateContext);

  useUpdateProducts();
  const { PageToTop } = useHeadEffect();
  const location = useLocation().pathname;
  const [currentPage, setCurrentPage] = useState({ search: search, wishlist: wishList, cart: cart, view: view, location: "" });
  useEffect(() => {
    setCurrentPage({ ...currentPage, search: search, wishlist: wishList, cart: cart, view: view, location: decodeURIComponent(location) });
  }, [location, search, wishList, cart, view]);

  return (
    <>
      {(currentPage.search || currentPage.wishlist || currentPage.cart || currentPage.view) && (
        <Routes>
          {(currentPage.view || currentPage.search || currentPage.wishlist) && (
            <Route
              path={currentPage.location}
              element={
                <>
                  {currentPage.search && <SearchSection />}
                  {currentPage.view && <ViewSection />}
                  {currentPage.wishlist && <WishlistSection />}
                </>
              }
            />
          )}
          {currentPage.cart && <Route path={currentPage.location} element={<CartSection />} />}
        </Routes>
      )}
      <Header />
      <PageLayout />
      <NewsSection />
      <Footer />
      <PagePreLoad />
      <PageToTop />
    </>
  );
};

export default App;
