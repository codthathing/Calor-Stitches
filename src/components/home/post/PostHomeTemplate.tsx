"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PostTemplate from "./PostTemplate";

export default function PostHomeTemplate() {
  const {posts} = useNavigateContext();

  return (
    <main id="mainPost">
      <PostTemplate postArray={posts.slice(0, 3)} imageClass={"postImage"} buttonClass={"post-home-button"} divClass={"mainPostDiv"} />
    </main>
  )
}