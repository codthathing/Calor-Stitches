"use client";
import { useBlogContext } from "@/store/providers/BlogProvider";
import PostDetails from "./PostDetails";
import Image from "next/image";

export default function PostDetailsMain() {
  const { postImage, postHead, postDetails, postParagraph } = useBlogContext();

  return (
    <div id="post-section-div">
      <div id="post-image-div"><Image src={postImage} alt={postHead} width={100} height={85} id="post-image" /></div>
      <PostDetails postDetails={postDetails} divClass={"post-details-div"} textClass={"post-details-text"} linkClass={"post-details-link"} defaultStyle={true} />
      <p id="post-topic">{postHead}</p>
      <p id="post-paragraph">{postParagraph}</p>
    </div>
  );
};
