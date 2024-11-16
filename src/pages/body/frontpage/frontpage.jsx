import { Routes, Route } from "react-router-dom";
import FrontText from "./innerpages/frontText";
import ProductSection from "./innerpages/product/product_section";
import CollectionTemplate from "./innerpages/collection";
import LatestSection from "./innerpages/latest/latest_section";
import PageArticle from "./innerpages/article";
import VideoDiv from "./innerpages/video_div";
import ServiceTemplate from "./innerpages/service";
import ProductView from "./innerpages/view/productview";
import Post from "./innerpages/post/post";
import { usePageInitialEffects } from "../otherpages/components/page_effects";

const FrontPage = () => {
  usePageInitialEffects({});

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
      <Post />
    </>
  );
}

export default FrontPage;