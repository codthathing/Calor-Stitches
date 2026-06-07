import PostBlogsSection from "@/components/post/postBlogsSection";
import PostsProvider from "@/store/providers/PostsProvider";

export default async function PostsPage({ params } : { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return (
    <PostsProvider title={category}>
      <PostBlogsSection />
    </PostsProvider>
  );
}
