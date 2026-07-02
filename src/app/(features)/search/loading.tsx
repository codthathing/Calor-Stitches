import FeatureSearchWrapper from "@/components/layout/feature-search/FeatureSearchWrapper";
import ProductTemplateLoading from "@/components/product-template/ProductTemplateLoading";

export default function Loading() {
  return (
    <FeatureSearchWrapper className="search-loading-section" CancelIcon={<div id="search-loading-cancel-icon" className="loading-background-animation" />}>
      <section id="search-loading-scrolling-section">
        <div id="search-loading-search" className="loading-background-animation" />
        <main id="search-loading-main">
          <div id="search-loading-topic" className="loading-background-animation" />
          <ProductTemplateLoading length={8} />
        </main>
      </section>
    </FeatureSearchWrapper>
  )
}