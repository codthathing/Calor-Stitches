export default function Loading() {
  return (
    <section id="posts-loading-section">
      {Array.from({ length: 2 }, (_, index) => (
        <main key={index}>
          <div id="blog-loading-image" className="loading-background-animation" />
          <section id="posts-loading-details-section">
            <main id="blog-loading-details-main">{Array.from({ length: 2 }, (_, index) => <div key={index} className="blog-loading-details-text loading-background-animation" />)}</main>
            <div id="blog-loading-details-topic" className="loading-background-animation" />
            <div id="posts-loading-details-description" className="loading-background-animation" />
            <div id="blog-loading-review-button" className="loading-background-animation" />
          </section>
        </main>
      ))}
    </section>
  )
}