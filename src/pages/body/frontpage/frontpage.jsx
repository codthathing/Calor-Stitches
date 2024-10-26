import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import FrontText from "./innerpages/frontText";
import ProductTemplate from "./innerpages/products_func/productTemplate";
import ProductButton from "./innerpages/product_button";
import CollectionTemplate from "./innerpages/collection";
import LatestLinks from "./innerpages/latestlinks";
import PageArticle from "./innerpages/article";
import VideoDiv from "./innerpages/video_div";
import ServiceTemplate from "./innerpages/service";
import ProductView from "../otherpages/innerpages/productview";

const FrontPage = () => {

  const { setToggleSideMenu, setNavbar, products, latestItems } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
    setNavbar(false);
  }, [setNavbar, setToggleSideMenu]);

  return (
    <>
      <FrontText />

      <section id="productSection">
        <div id="productTopicDiv">
          <p id="productParagraph" className="paragraphStyles">NEW AND EXTRAORDINARY</p>
          <h1 id="productHead">Featured Products</h1>
        </div>
        <ProductTemplate productArray={products} />
        <ProductButton linkTo={"/product"} />
      </section>

      <Routes>
        <Route path="/:productName" element={<ProductView />}></Route>
      </Routes>

      <CollectionTemplate />

      <section id="latestSection">
        <LatestLinks />
        <ProductTemplate productArray={latestItems} />
        <ProductButton linkTo={"/product/latest-items"} />
      </section>

      <PageArticle />

      <VideoDiv />

      <ServiceTemplate />
    </>
  );
}

export default FrontPage;