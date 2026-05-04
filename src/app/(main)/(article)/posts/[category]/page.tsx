import PostBlogsSection from "@/components/post/postBlogsSection";
import PostsProvider from "@/store/providers/PostsProvider";

export default async function PostsPage({ params } : { params: Promise<{ category: string }> }) {
  const { category } = await params;

  // const pageLinkDetails = [
  //   { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
  //   { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
  //   { id: 2, linkDirect: "", linkText: post_title, linkArrow: false }
  // ]

  return (
    <PostsProvider title={category}>
      <PostBlogsSection />
    </PostsProvider>
  );
}
