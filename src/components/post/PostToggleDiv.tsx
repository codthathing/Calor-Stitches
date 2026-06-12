"use client";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { useBlogContext } from "@/store/providers/BlogProvider";
import { usePathname, useRouter } from "next/navigation";

export default function PostToggleDiv() {
  let { id } = useBlogContext();
  const router = useRouter();
  const pathname = decodeURIComponent(usePathname().replace("/blog/", ""));

  const changePost = (toggle: string) => {
    { (id > 0 && toggle === "PREV") ? id -= 1 : (id < (mockBlogPosts.length - 1) && toggle === "NEXT") && (id += 1) };
    const newPost = mockBlogPosts.find(({ id: post_id }) => post_id === id);

    if (!newPost) return;
    
    if (pathname !== newPost.postHead) router.push(`/blog/${newPost.postHead}`);
  };

  return (
    <div id="post-toggle-div">
      <p className="post-toggle-text" onClick={() => changePost("PREV")}>previous post</p>
      <p className="post-toggle-text" onClick={() => changePost("NEXT")}>next post</p>
    </div>
  );
};
