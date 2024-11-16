import { useContext, useState } from "react";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../components/pagelinks";
import { usePageInitialEffects } from "../components/page_effects";
import AboutLinks from "../review/about/about_links";
import AdminProduct from "./admin_product";
import AdminBlog from "./admin_blog";

const AdminPage = () => {
  const { setAccount } = useContext(ToggleRegister);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "admin page", linkArrow: false }
  ]

  usePageInitialEffects({ effectsArray: [{ effect: setAccount, value: false }] });

  const [presentPage, setPresentPage] = useState("PRODUCTS");

  const [linksArray, setLinksArray] = useState([
    { id: 0, text: "PRODUCTS", style: true },
    { id: 1, text: "POSTS", style: false }
  ]);

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="admin-main">
        <AboutLinks page={presentPage} setPage={setPresentPage} array={linksArray} setArray={setLinksArray} />
        {presentPage === "PRODUCTS" && <AdminProduct />}
        {presentPage === "POSTS" && <AdminBlog />}
      </main>
    </div>
  );
};

export default AdminPage;