import PageSection from "@/components/layout/PageSection";
import ProductTemplateLoading from "@/components/product-template/ProductTemplateLoading";
import PageNavigationLinksLoading from "@/components/ui/PageNavigationLinksLoading";

export default function Loading() {
  return (
    <PageSection>
      <PageNavigationLinksLoading length={2} />
      <main id="product-loading-main-display">
        <section id="product-loading-filter-section">
          <div id="product-loading-filter-count" className="loading-background-animation" />
          <div id="product-loading-filter-option" className="loading-background-animation" />
        </section>
        <ProductTemplateLoading length={4} />
      </main>
    </PageSection>
  )
}