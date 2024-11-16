import PageLinkTemplate from "../../components/pagelinks";
import PostBlogs from "./post_blogs";
import PostOther from "../post_other/post_other";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { posts } from "../../../frontpage/innerpages/post/blog_posts";
import { usePageInitialEffects } from "../../components/page_effects";

export const PostOtherContext = createContext();
const PostOtherBlogs = () => {
  const { post_title } = useParams();

  const [filteredPost, setFilteredPost] = useState([]);

  usePageInitialEffects({dependency: post_title});

  useEffect(() => {
    const updatedTitle = post_title.slice(0, 3) === "tag" ? post_title.slice(5) : post_title;
    const updatedPosts = posts.filter(({ postDetails }) => postDetails?.find(({ inner_text }) => inner_text?.some(({ text }) => text === updatedTitle)));
    setFilteredPost(updatedPosts);
  }, [post_title])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
    { id: 2, linkDirect: "", linkText: post_title, linkArrow: false }
  ]

  return (
    <PostOtherContext.Provider value={{ filteredPost }}>
      <div className="otherPages">
        <PageLinkTemplate pageLinks={pageLinkDetails} />
        <main className="post-main">
          <PostBlogs />
          <PostOther />
        </main>
      </div>
    </PostOtherContext.Provider>
  );
};

export default PostOtherBlogs;