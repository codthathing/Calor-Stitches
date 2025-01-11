import HomeText from "../components/home/HomeText";
import ProductSection from "../components/home/product/ProductSection";
import HomeCollection from "../components/home/HomeCollection";
import LatestSection from "../components/home/latest/LatestSection";
import HomeArticle from "../components/home/HomeArticle";
import HomeVideoDiv from "../components/home/HomeVideoDiv";
import HomeService from "../components/home/HomeService";
import PostSection from "../components/home/post/PostSection";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";

const HomePage = () => {
  usePageLoadEffects({});

  return (
    <>
      <HomeText />
      <ProductSection />
      <HomeCollection />
      <LatestSection />
      <HomeArticle />
      <HomeVideoDiv />
      <HomeService />
      <PostSection />
    </>
  );
}

export default HomePage;