import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostBlogsContext } from "../services/contexts/PostBlogsContext";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import PostBlogsSection from "../components/post/postBlogsSection";
import PostOtherSection from "../components/post/PostOtherSection";
import { mockBlogPosts } from "../database/mockBlogPosts";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageSection from "../components/layout/PageSection";


export default function BlogsPage() {
  const { post_title } = useParams();

  const [filteredPost, setFilteredPost] = useState([]);

  usePageLoadEffects({dependency: post_title});

  useEffect(() => {
    const updatedTitle = post_title.slice(0, 3) === "tag" ? post_title.slice(5) : post_title;
    const updatedPosts = mockBlogPosts.filter(({ postDetails }) => postDetails?.find(({ inner_text }) => inner_text?.some(({ text }) => text === updatedTitle)));
    setFilteredPost(updatedPosts);
  }, [post_title])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
    { id: 2, linkDirect: "", linkText: post_title, linkArrow: false }
  ]

  return (
    <PostBlogsContext.Provider value={{ filteredPost }}>
      <PageSection>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main className="post-main">
          <PostBlogsSection />
          <PostOtherSection />
        </main>
      </PageSection>
    </PostBlogsContext.Provider>
  );
}