import PostMainSection from "@/components/post/PostMainSection";
import BlogProvider from "@/store/providers/BlogProvider";

export default async function BlogPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;

  // const pageLinkDetails = [
  //   { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
  //   { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
  //   { id: 2, linkDirect: "", linkText: postDetails.find(({ inner_text }) => inner_text)?.inner_text?.find(({ id }) => id === 0)?.text, linkArrow: true },
  //   { id: 3, linkDirect: "", linkText: postTopic, linkArrow: false },
  // ];

  return (
    <BlogProvider title={decodeURIComponent(topic)}>
      <PostMainSection />
    </BlogProvider>
  );
}
