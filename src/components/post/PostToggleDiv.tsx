"use client";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { useBlogContext } from "@/store/providers/BlogProvider";

export default function PostToggleDiv() {
  let { id, postTopic, setPostTopic } = useBlogContext();
  const navigate = useNavigateToPage();


  const changePost = (toggle: string) => {
    { (id > 0 && toggle === "PREV") ? id -= 1 : (id < (mockBlogPosts.length - 1) && toggle === "NEXT") && (id += 1) };
    const newPost = mockBlogPosts.find(({ id: post_id }) => post_id === id);

    if (!newPost) return;

    if (postTopic !== newPost.postHead) {
      setPostTopic(newPost.postHead);
      navigate(`/blog/${newPost.postHead}`);
    }
  };

  return (
    <div id="post-toggle-div">
      <p className="post-toggle-text" onClick={() => changePost("PREV")}>previous post</p>
      <p className="post-toggle-text" onClick={() => changePost("NEXT")}>next post</p>
    </div>
  );
};
