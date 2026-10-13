import CollectionMain from "@/components/collection/CollectionMain";
import PageSection from "@/components/layout/PageSection";
import { getCollectionProducts } from "@/lib/utils/getCollectionProducts";

export const generateMetadata = async ({ params } : { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const title = decodeURIComponent(category).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return { title: `Category: ${title}` };
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const [collections] = await Promise.all([
    getCollectionProducts(category),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]);

  return (
    <PageSection>
      <CollectionMain category={category} collections={collections} />
    </PageSection>
  );
}