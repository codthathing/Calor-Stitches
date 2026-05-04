import CollectionMain from "@/components/collection/CollectionMain";
import PageSection from "@/components/layout/PageSection";

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <PageSection>
      <CollectionMain category={decodeURIComponent(category)} />
    </PageSection>
  );
}