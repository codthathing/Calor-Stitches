import FeatureSearchWrapper from "@/components/layout/features-search/FeatureSearchWrapper";
import SearchMain from "@/components/layout/features-search/SearchMain";

export default function SearchPage() {
  return (
    <FeatureSearchWrapper>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </FeatureSearchWrapper>
  );
}
