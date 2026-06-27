import PageSection from "@/components/layout/PageSection";
import ProductTemplateLoading from "@/components/product-template/ProductTemplateLoading";
import PageNavigationLinksLoading from "@/components/ui/PageNavigationLinksLoading";

export default function Loading() {
  return (
    <PageSection>
      <PageNavigationLinksLoading length={3} />
      <main id="review-loading-main">
        <section id="review-loading-images-section">
          <div id="review-loading-images-grid">{Array.from({ length: 5 }, (_, index) => <div key={index} className="loading-background-animation" />)}</div>
          <div className="loading-background-animation" />
        </section>
        <section id="review-loading-details-section">
          <div id="review-loading-details-product-name" className="loading-background-animation" />
          <div id="review-loading-details-price" className="loading-background-animation" />
          <div id="review-loading-details-ratings" className="loading-background-animation" />
          <div id="review-loading-details-description" className="loading-background-animation" />
          <section className="review-loading-details-inner-section">
            <div id="review-loading-details-status-text" className="loading-background-animation" />
            <div id="review-loading-details-status-bar" className="loading-background-animation" />
          </section>
          <section className="review-loading-details-inner-section">
            <div id="review-loading-color-text" className="loading-background-animation" />
            <section id="review-loading-color-section">
              {Array.from({ length: 2 }, (_, index) => (
                <main key={index} className="wishlist-loading-handle-main">
                  <div className="wishlist-loading-handle-icon loading-background-animation" />
                  <div className="wishlist-loading-handle-text loading-background-animation" />
                </main>
              ))}
            </section>
          </section>
          <section className="review-loading-details-inner-section">
            <main id="review-loading-topic-section">{Array.from({ length: 2 }, (_, index) => <div key={index} className="review-loading-topic-text loading-background-animation" />)}</main>
            <main id="review-loading-size-section">{Array.from({ length: 2 }, (_, index) => <div key={index} className="review-loading-size loading-background-animation" />)}</main>
          </section>
          <section className="review-loading-details-inner-section">
            <main id="review-loading-cart-section">
              <div id="review-loading-cart-quantity" className="loading-background-animation" />
              <div id="review-loading-cart-button" className="loading-background-animation" />
            </main>
            <main id="review-loading-wishlist-section">
              <div id="review-loading-wishlist-icon" className="loading-background-animation" />
              <div id="review-loading-wishlist-text" className="loading-background-animation" />
            </main>
          </section>
          <section id="review-loading-delivery-section">
            {Array.from({ length: 3 }, (_, index) => (
              <main key={index} className="review-loading-delivery-main">
                <div className="review-loading-delivery-icon loading-background-animation" />
                <div className="review-loading-delivery-text loading-background-animation" />
              </main>
            ))}
          </section>
          <div id="review-loading-payment-section" className="loading-background-animation" />
          <div id="review-loading-sku" className="loading-background-animation" />
          <div id="review-loading-category" className="loading-background-animation" />
          <section id="review-loading-handle-section">{Array.from({ length: 4 }, (_, index) => <div key={index} className="review-loading-handle-icon loading-background-animation" />)}</section>
        </section>
      </main>
      <section id="review-loading-product-description-section">
        <main id="review-loading-product-description-navigation-section">{Array.from({ length: 2 }, (_, index) => <div key={index} className="review-loading-product-description-navigation-text loading-background-animation" />)}</main>
        <div id="review-loading-product-description" className="loading-background-animation" />
      </section>
      <section id="review-loading-related-section">
        <div id="review-loading-related-topic" className="loading-background-animation" />
        <ProductTemplateLoading length={4} />
      </section>
    </PageSection>
  )
}