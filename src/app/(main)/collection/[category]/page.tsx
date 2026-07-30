import CollectionMain from "@/components/collection/CollectionMain";
import PageSection from "@/components/layout/PageSection";

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params } : { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const title = decodeURIComponent(category).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return { title: `Category: ${title}` };
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { category } = await params;

  return (
    <PageSection>
      <CollectionMain category={decodeURIComponent(category)} />
    </PageSection>
  );
}