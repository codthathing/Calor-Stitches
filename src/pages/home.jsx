import { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToggleRegister } from "./contextpage";
import Header from "./header/header";
import PageLayout from "./body/pagelayout";
import NewsSection from "./news_section/news_section";
import Footer from "./footer/footer";
import { useProductEffect } from "./components/products_effect";
import PreLoad from "./components/pre_load";
import { useHead } from "./header/usehead";
import WishList from "./header/header_pages/wishlist_page/wishlist";
import Search from "./header/header_pages/search/search";
import Cart from "./header/header_pages/cart_page/cart";
import ProductView from "./body/frontpage/innerpages/view/productview";

const Home = () => {
  const { search, wishList, cart, view } = useContext(ToggleRegister);

  useProductEffect();
  const { PageToTop } = useHead();
  const location = useLocation().pathname;
  const [currentPage, setCurrentPage] = useState({ search: search, wishlist: wishList, cart: cart, view: view, location: "" });
  useEffect(() => {
    setCurrentPage({ ...currentPage, search: search, wishlist: wishList, cart: cart, view: view, location: decodeURIComponent(location) });
  }, [location, search, wishList, cart, view]);

  return (
    <>
      {(currentPage.search || currentPage.wishlist || currentPage.cart || currentPage.view) && <Routes>
        {(currentPage.view || currentPage.search || currentPage.wishlist) && <Route path={currentPage.location} element={<>
          {currentPage.search && <Search />}
          {currentPage.view && <ProductView />}
          {currentPage.wishlist && <WishList />}
        </>} />}
        {currentPage.cart && <Route path={currentPage.location} element={<Cart />} />}
      </Routes>}
      <Header />
      <PageLayout />
      <NewsSection />
      <Footer />
      <PreLoad />
      <PageToTop />
    </>
  );
}

export default Home;