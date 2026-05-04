import PageSection from "@/components/layout/PageSection";
import ProductMain from "@/components/product/ProductMain";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";

export default function ProductPage() {
  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ];

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <ProductMain />
    </PageSection>
  );
}