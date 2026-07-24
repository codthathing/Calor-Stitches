import PreviewProvider from "@/store/providers/PreviewProvider";
import PreviewImageDiv from "@/components/layout/feature-preview/PreviewImageDiv";
import PreviewDetailsDiv from "@/components/layout/feature-preview/PreviewDetailsDiv";
import PreviewMainWrapper from "@/components/layout/feature-preview/PreviewMainWrapper";

export default async function PreviewPage({ searchParams }: { searchParams: Promise<{ name: string }> }) {
  const { name } = await searchParams;

  return (
    <PreviewProvider productName={name}>
      <section className="navSections" id="productViewSection">
        <PreviewMainWrapper>
          <PreviewImageDiv />
          <PreviewDetailsDiv />
        </PreviewMainWrapper>
      </section>
    </PreviewProvider>
  );
}
