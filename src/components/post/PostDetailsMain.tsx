"use client";
import { useBlogContext } from "@/store/providers/BlogProvider";
import PostDetails from "./PostDetails";

export default function PostDetailsMain() {
  const { postImage, postHead, postDetails, postParagraph } = useBlogContext();

  return (
    <div id="post-section-div">
      <div id="post-image-div"><img src={postImage} alt={postHead} id="post-image" /></div>
      <PostDetails postDetails={postDetails} divClass={"post-details-div"} textClass={"post-details-text"} linkClass={"post-details-link"} defaultStyle={true} />
      <p id="post-topic">{postHead}</p>
      <p id="post-paragraph">{postParagraph}</p>
    </div>
  );
};
