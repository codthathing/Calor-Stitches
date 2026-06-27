import DisplayMain from "@/components/displays/DisplayMain";
import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import DisplayProvider from "@/store/providers/DisplayProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Display Products"
}

export default async function DisplayPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "display items", linkArrow: false },
  ];

  return (
    <DisplayProvider>
      <PageSection>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <DisplayMain />
      </PageSection>
    </DisplayProvider>
  );
}
