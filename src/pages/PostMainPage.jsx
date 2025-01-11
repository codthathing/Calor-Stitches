import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostMainContext } from "../services/contexts/PostMainContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import { mockBlogPosts } from "../database/mockBlogPosts";
import PostMainSection from "../components/post/PostMainSection";
import PostOtherSection from "../components/post/PostOtherSection";

const PostMainPage = () => {
  const { post_head } = useParams();
  const [blog, setBlog] = useState({});

  const [postState, setPostState] = useState(post_head);

  usePageLoadEffects({dependency: post_head});

  useEffect(() => {
    const presentBlog = mockBlogPosts.find((post) => post.postHead === post_head);
    setBlog(presentBlog);
  }, [mockBlogPosts, post_head]);

  const { id, postImage, postDetails, postAuthor, postHead: postTopic, postParagraph } = blog;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
    { id: 2, linkDirect: "", linkText: (postDetails && postDetails.find(({ inner_text }) => inner_text)?.inner_text.find(({ id }) => id === 0).text), linkArrow: true },
    { id: 3, linkDirect: "", linkText: postTopic, linkArrow: false },
  ]

  return (
    <PostMainContext.Provider value={{ postState, setPostState, id, postImage, postAuthor, postTopic, postDetails, postParagraph }}>
      <div className="otherPages">
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main className="post-main">
          <PostMainSection />
          <PostOtherSection />
        </main>
      </div>
    </PostMainContext.Provider>
  );
};

export default PostMainPage;