import PageSection from "@/components/layout/PageSection";
import ProductMain from "@/components/product/ProductMain";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products"
}

export default async function ProductPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Products", linkArrow: false },
  ];

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <ProductMain />
    </PageSection>
  );
}