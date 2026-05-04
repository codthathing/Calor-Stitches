import FeatureSearchWrapper from "@/components/layout/feature-search/FeatureSearchWrapper";
import SearchMain from "@/components/layout/feature-search/SearchMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Page"
}

export default function SearchPage() {
  return (
    <FeatureSearchWrapper>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </FeatureSearchWrapper>
  );
}
