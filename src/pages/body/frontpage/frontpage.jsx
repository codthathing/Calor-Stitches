import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import FrontText from "./innerpages/frontText";
import ProductSection from "./innerpages/product/product_section";
import CollectionTemplate from "./innerpages/collection";
import LatestSection from "./innerpages/latest/latest_section";
import PageArticle from "./innerpages/article";
import VideoDiv from "./innerpages/video_div";
import ServiceTemplate from "./innerpages/service";
import ProductView from "../otherpages/innerpages/productview";

const FrontPage = () => {

  const { setToggleSideMenu, setNavbar } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
    setNavbar(false);
  }, [setNavbar, setToggleSideMenu]);

  return (
    <>
      <FrontText />
      <ProductSection />
      <Routes><Route path="/:productName" element={<ProductView />}></Route></Routes>
      <CollectionTemplate />
      <LatestSection />
      <PageArticle />
      <VideoDiv />
      <ServiceTemplate />
    </>
  );
}

export default FrontPage;