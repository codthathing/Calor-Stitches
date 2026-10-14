import FeatureSearchCancelIcon from "@/components/layout/feature-search/FeatureSearchCancelIcon";
import FeatureSearchWrapper from "@/components/layout/feature-search/FeatureSearchWrapper";
import SearchMain from "@/components/layout/feature-search/SearchMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Page",
};

export const dynamic = "force-dynamic";

export default async function SearchPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <FeatureSearchWrapper CancelIcon={<FeatureSearchCancelIcon />}>
      <SearchMain />
      <footer id="searchFooter" className="navFooter"></footer>
    </FeatureSearchWrapper>
  );
}
