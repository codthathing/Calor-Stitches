export default function Loading() {
  return (
    <section>
      <div id="blog-loading-image" className="loading-background-animation" />
      <section id="blog-loading-details-section">
        <main id="blog-loading-details-main">{Array.from({ length: 3 }, (_, index) => <div key={index} className="blog-loading-details-text loading-background-animation" />)}</main>
        <div id="blog-loading-details-topic" className="loading-background-animation" />
        <div id="blog-loading-details-description" className="loading-background-animation" />
      </section>
      <section id="blog-loading-author-section">
        <main id="blog-loading-author-handle-section">
          <div id="blog-loading-author-category" className="loading-background-animation" />
          <section id="blog-loading-handle-section">
            {Array.from({ length: 2 }, (_, index) => (
              <main key={index} className="wishlist-loading-handle-main">
                <div className="loading-background-animation wishlist-loading-handle-icon" />
                <div className="wishlist-loading-handle-text loading-background-animation" />
              </main>
            ))}
          </section>
        </main>
        <div id="blog-loading-author-description" className="loading-background-animation" />
        <main style={{ display: "flex", justifyContent: "space-between" }}>{Array.from({ length: 2 }, (_, index) => <div key={index} className="blog-loading-navigation-button loading-background-animation" />)}</main>
      </section>
      <section id="blog-loading-review-section">
        <main id="blog-loading-review-main">
          <div id="blog-loading-review-topic" className="loading-background-animation" />
          <div id="blog-loading-review-description" className="loading-background-animation" />
          <div id="blog-loading-review-text" className="loading-background-animation" />
        </main>
        <main id="blog-loading-review-details-section">{Array.from({ length: 2 }, (_, index) => <div key={index} className="blog-loading-review-details loading-background-animation" />)}</main>
        <div id="blog-loading-review-description" className="loading-background-animation" />
        <div id="blog-loading-review-button" className="loading-background-animation" />
      </section>
    </section>
  )
}