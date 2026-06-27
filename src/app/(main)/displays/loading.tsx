import PageSection from "@/components/layout/PageSection";
import ProductTemplateLoading from "@/components/product-template/ProductTemplateLoading";
import PageNavigationLinksLoading from "@/components/ui/PageNavigationLinksLoading";

export default function Loading() {
  return (
    <PageSection>
      <PageNavigationLinksLoading length={3} />
      <main id="product-loading-main-display">
        <section id="product-loading-filter-section">
          <main id="display-loading-filter">
            <div id="display-loading-filter-icon" className="loading-background-animation" />
            <div id="display-loading-filter-text" className="loading-background-animation" />
          </main>
          <div id="product-loading-filter-option" className="loading-background-animation" />
        </section>
        <ProductTemplateLoading length={4} />
      </main>
    </PageSection>
  );
}
