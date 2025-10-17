import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUpdateProducts } from "./hooks/useUpdateProducts";
import PageLayout from "./components/layout/PageLayout";
import PageFeatures from "./components/layout/PageFeatures";
import HomePage from "./pages/HomePage";
const ReviewPage = lazy(() => import("./pages/ReviewPage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const DisplayPage = lazy(() => import("./pages/DisplayPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ConfirmPage = lazy(() => import("./pages/ConfirmPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const PostMainPage = lazy(() => import("./pages/PostMainPage"));
const PostBlogsPage = lazy(() => import("./pages/PostBlogsPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

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
