import { useContext, useState } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import AboutNavigationLinks from "../components/review/AboutNavigationLinks";
import AdminProductSection from "../components/admin/AdminProductSection";
import AdminBlogSection from "../components/admin/AdminBlogSection";
import PageSection from "../components/layout/PageSection";

const AdminPage = () => {
  const { setAccount } = useContext(NavigateContext);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "admin page", linkArrow: false },
  ];

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
};

export default AdminPage;
