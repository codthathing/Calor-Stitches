"use client";
import { usePostsContext } from "@/store/providers/PostsProvider";
import PostTemplate from "../home/post/PostTemplate";

export default function PostBlogsSection() {
  const { categoryPosts } = usePostsContext();

  return (
    <section className="post-main-section">
      <div id="post-other-div">{categoryPosts && <PostTemplate postArray={categoryPosts} imageClass={"post-other-image"} buttonClass={"post-other-button"} type={"button"} />}</div>
    </section>
  );
};
