import LatestProvider from "@/store/providers/LatestProvider";
import LatestNavigationLinks from "./LatestNavigationLinks";
import ProductButton from "../product/ProductButton";
import LatestSectionProducts from "@/components/layout/display-section/LatestSectionProducts";

export default function LatestSection() {
  return (
    <LatestProvider>
      <section id="latestSection">
        <LatestNavigationLinks />
        <LatestSectionProducts />
        <ProductButton linkTo={"/displays"} />
      </section>
    </LatestProvider>
  );
};
