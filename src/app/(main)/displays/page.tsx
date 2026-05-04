import DisplayMain from "@/components/displays/DisplayMain";
import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import DisplayProvider from "@/store/providers/DisplayProvider";

export default function DisplayPage() {
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
