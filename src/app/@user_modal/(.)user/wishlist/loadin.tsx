import WishlistProductTemplateLoading from "@/components/layout/user-wishlist/WishlistProductTemplateLoading";

export default function Loading() {
  return (
    <main className="wishlist-main">
      <div id="wishlist-loading-header">
        <div id="wishlist-loading-topic" className="loading-background-animation" />
        <div id="wishlist-loading-cancel-icon" className="loading-background-animation" />
      </div>
      <WishlistProductTemplateLoading length={3} />
      <div id="wishlist-loading-footer">
        {Array.from({ length: 2 }, (_, index) => <div key={index} className="wishlist-loading-footer-text loading-background-animation" />)}
      </div>
    </main>
  )
}