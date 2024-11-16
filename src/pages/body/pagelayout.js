import { Routes, Route } from "react-router-dom";
import FrontPage from "./frontpage/frontpage";
import ProductReview from "./otherpages/review/productreview";
import CollectionPage from "./otherpages/collectionpage";
import ProductPage from "./otherpages/product_page/productpage";
import ProductDisplay from "./otherpages/product_display/productdisplay";
import WishListPage from "./otherpages/wishlist/wishlistpage";
import CartPage from "./otherpages/cart/cartpage";
import CheckoutPage from "./otherpages/checkout/checkoutpage";
import ConfirmPage from "./otherpages/confirm_page/confirm_page";
import PaymentPage from "./otherpages/payment/payment_page";
import PostPage from "./otherpages/post/post_page";
import PostOtherBlogs from "./otherpages/post/post_other_blogs/post_other_blogs";
import AdminPage from "./otherpages/admin/admin_page";

const PageLayout = () => {

  return (
    <Routes>
      <Route path="/*" element={<FrontPage />}></Route>
      <Route path="/product/:productName" element={<ProductReview />}></Route>
      <Route path="/product/collection/:collectionName" element={<CollectionPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/product/latest-items" element={<ProductDisplay />}></Route>
      <Route path="/shop/wishlist" element={<WishListPage />}></Route>
      <Route path="/shop/cart" element={<CartPage />}></Route>
      <Route path="/shop/checkout" element={<CheckoutPage />}></Route>
      <Route path="/pages/confirmation_page" element={<ConfirmPage />} />
      <Route path="/pages/payment_page" element={<PaymentPage />} />
      <Route path="/blog/:post_head" element={<PostPage />} />
      <Route path="/blog/post/:post_title" element={<PostOtherBlogs />} />
      <Route path="/pages/admin_page" element={<AdminPage />} />
    </Routes>
  );
}

export default PageLayout;