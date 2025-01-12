import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUpdateProducts } from "./hooks/useUpdateProducts";
import PageFeatures from "./components/layout/PageFeatures";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import ReviewPage from "./pages/ReviewPage";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import DisplayPage from "./pages/DisplayPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmPage from "./pages/ConfirmPage";
import PaymentPage from "./pages/PaymentPage";
import PostMainPage from "./pages/PostMainPage";
import PostBlogsPage from "./pages/PostBlogsPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
  useUpdateProducts();

  return (
    <BrowserRouter>
      <PageFeatures />
      <Routes>
        <Route exact path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:productName" element={<ReviewPage />} />
          <Route path="/product/collection/:collectionName" element={<CollectionPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/display-page" element={<DisplayPage />} />
          <Route path="/shop/wishlist" element={<WishlistPage />} />
          <Route path="/shop/cart" element={<CartPage />} />
          <Route path="/shop/checkout" element={<CheckoutPage />} />
          <Route path="/pages/confirm-page" element={<ConfirmPage />} />
          <Route path="/pages/payment-page" element={<PaymentPage />} />
          <Route path="/blog/:post_head" element={<PostMainPage />} />
          <Route path="/blog/post/:post_title" element={<PostBlogsPage />} />
          <Route path="/pages/admin-page" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
