import HomeArticle from "@/components/home/HomeArticle";
import HomeCollection from "@/components/home/HomeCollection";
import HomeService from "@/components/home/HomeService";
import HomeText from "@/components/home/HomeText";
import HomeVideoDiv from "@/components/home/HomeVideoDiv";
import LatestSection from "@/components/home/latest/LatestSection";
import PostSection from "@/components/home/post/PostSection";
import ProductSection from "@/components/home/product/ProductSection";
import { usePageLoadEffects } from "@/hooks/usePageLoadEffects";

export default function HomePage() {
  usePageLoadEffects(null);

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
