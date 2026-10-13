import PostBlogsSection from "@/components/post/PostBlogsSection";
import { getBlogsPosts } from "@/lib/utils/getBlogsPosts";
import PostsBlogsWrapper from "@/components/post/PostsBlogsWrapper";

export const generateMetadata = async ({ params } : { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  const title = decodeURIComponent(category).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return { title: `Tag: ${title}` };
}

export default async function PostsPage({ params } : { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const [categoryPosts] = await Promise.all([
    getBlogsPosts(category),
    new Promise((resolve) => setTimeout(resolve, 3000))
  ]);

  return (
    <PostsBlogsWrapper title={category}>
      <PostBlogsSection posts={categoryPosts} />
    </PostsBlogsWrapper>
  );
}
