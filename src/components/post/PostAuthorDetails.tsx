"use client";
import { useBlogContext } from "@/store/providers/BlogProvider";
import NewsHandleIcons from "../news-letter/NewsHandleIcons";

export default function PostAuthorDetails() {
  const { postAuthor } = useBlogContext();

  if(postAuthor) {
    return (
      <div id="post-shown-div">
        <img src={postAuthor.profile_picture} loading="lazy" alt={postAuthor.name} id="post-shown-image" />
        <div id="post-shown-inner-div">
          <p id="post-shown-head">{postAuthor.name}</p>
          <p id="post-shown-text">{postAuthor.description}</p>
          <NewsHandleIcons className={"post-shown-handle"} />
        </div>
      </div>
    );
  }
};
