import WishlistProductDiv from "@/components/layout/user-wishlist/WishlistProductDiv";
import UserWishlistHeader from "@/components/layout/user-wishlist/UserWishlistHeader";
import UserWishlistFooter from "@/components/layout/user-wishlist/UserWishlistFooter";

export default async function WishlistPage() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="wishlist-main">
      <UserWishlistHeader />
      <WishlistProductDiv />
      <UserWishlistFooter />
    </main>
  );
}
