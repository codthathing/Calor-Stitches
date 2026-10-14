import PostMainSection from "@/components/post/PostMainSection";
import { getPostDetails } from "@/lib/utils/getPostDetails";
import BlogProvider from "@/store/providers/BlogProvider";

export const generateMetadata = async ({ params }: { params: Promise<{ topic: string }> }) => {
  const { topic } = await params;
  const title = decodeURIComponent(topic).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return { title };
}

export default async function BlogPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  
  const [post] = await Promise.all([
    getPostDetails(decodeURIComponent(topic)),
    // new Promise((resolve) => setTimeout(resolve, 3000))
  ])

  return (
    <BlogProvider title={decodeURIComponent(topic)} post={post}>
      <PostMainSection />
    </BlogProvider>
  );
}
