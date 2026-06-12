import PostBlogsSection from "@/components/post/PostBlogsSection";
import PostsProvider from "@/store/providers/PostsProvider";

export const generateMetadata = async ({ params } : { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const title = decodeURIComponent(category).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return { title: `Tag: ${title}` };
}

export default async function PostsPage({ params } : { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <PostsProvider title={category}>
      <PostBlogsSection />
    </PostsProvider>
  );
}
