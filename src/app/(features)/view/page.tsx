import ViewProvider from "@/store/providers/ViewProvider";
import ViewImageDiv from "@/components/layout/feature-view/ViewImageDiv";
import ViewDetailsDiv from "@/components/layout/feature-view/ViewDetailsDiv";
import ViewMainWrapper from "@/components/layout/feature-view/ViewMainWrapper";

export default function ViewPage() {
  return (
    <ViewProvider>
      <section className="navSections" id="productViewSection">
        <ViewMainWrapper>
          <ViewImageDiv />
          <ViewDetailsDiv />
        </ViewMainWrapper>
      </section>
    </ViewProvider>
  );
}
