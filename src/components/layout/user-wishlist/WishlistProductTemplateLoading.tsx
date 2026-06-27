export default function WishlistProductTemplateLoading({ length }: { length: number }) {
  return (
    <section id="wishlist-loading-section">
      {Array.from({ length }, (_, index) => (
        <main key={index} className="wishlist-loading-item-main">
          <section className="wishlist-loading-details-section">
            <div className="wishlist-loading-item-cancel-icon loading-background-animation" />
            <div className="wishlist-loading-item-image loading-background-animation" />
            <div className="wishlist-loading-item-details loading-background-animation" />
          </section>
          <div className="wishlist-loading-item-order-options loading-background-animation" />
        </main>
      ))}
    </section>
  );
}
