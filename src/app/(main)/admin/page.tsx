import AdminBlogSection from "@/components/admin/AdminBlogSection";
import AdminProductSection from "@/components/admin/AdminProductSection";
import PageSection from "@/components/layout/PageSection";
import AboutNavigationLinks from "@/components/review/AboutNavigationLinks";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import { usePageLoadEffects } from "@/hooks/usePageLoadEffects";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useState } from "react";

const pageLinkDetails = [
  { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
  { id: 1, linkDirect: "", linkText: "page", linkArrow: true },
  { id: 2, linkDirect: "", linkText: "admin page", linkArrow: false },
];

export default function AdminPage() {
  const { setAccount } = useNavigateContext();

  usePageLoadEffects({ effectsArray: [{ effect: setAccount, value: false }] });

  const [presentPage, setPresentPage] = useState("PRODUCTS");

  const [linksArray, setLinksArray] = useState([
    { id: 0, text: "PRODUCTS", style: true },
    { id: 1, text: "POSTS", style: false },
  ]);

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="admin-main">
        <AboutNavigationLinks page={presentPage} setPage={setPresentPage} array={linksArray} setArray={setLinksArray} />
        {presentPage === "PRODUCTS" && <AdminProductSection />}
        {presentPage === "POSTS" && <AdminBlogSection />}
      </main>
    </PageSection>
  );
}
