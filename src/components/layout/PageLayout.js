import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ReviewPage from "../../pages/ReviewPage";
import CollectionPage from "../../pages/CollectionPage";
import ProductPage from "../../pages/ProductPage";
import DisplayPage from "../../pages/DisplayPage";
import WishlistPage from "../../pages/WishlistPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ConfirmPage from "../../pages/ConfirmPage";
import PaymentPage from "../../pages/PaymentPage";
import PostMainPage from "../../pages/PostMainPage";
import PostBlogsPage from "../../pages/PostBlogsPage";
import AdminPage from "../../pages/AdminPage";

const PageLayout = () => {

  return (
    <Routes>
      <Route exact path="/*" element={<HomePage />}></Route>
      <Route path="/product/:productName" element={<ReviewPage />}></Route>
      <Route path="/product/collection/:collectionName" element={<CollectionPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/product/latest-items" element={<DisplayPage />}></Route>
      <Route path="/shop/wishlist" element={<WishlistPage />}></Route>
      <Route path="/shop/cart" element={<CartPage />}></Route>
      <Route path="/shop/checkout" element={<CheckoutPage />}></Route>
      <Route path="/pages/confirmation_page" element={<ConfirmPage />} />
      <Route path="/pages/payment_page" element={<PaymentPage />} />
      <Route path="/blog/:post_head" element={<PostMainPage />} />
      <Route path="/blog/post/:post_title" element={<PostBlogsPage />} />
      <Route path="/pages/admin_page" element={<AdminPage />} />
    </Routes>
  );
}

export default PageLayout;