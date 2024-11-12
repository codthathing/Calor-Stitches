import { useContext } from "react";
import { PostContext } from "../post_page";
import PostDetails from "../components/post_details";

const PostDiv = () => {
  const { postImage, postTopic, postDetails, postParagraph } = useContext(PostContext);

  return (
    <div id="post-section-div">
      <div id="post-image-div"><img src={postImage} alt={postTopic} id="post-image" /></div>
      <PostDetails postDetails={postDetails} divClass={"post-details-div"} textClass={"post-details-text"} linkClass={"post-details-link"} defaultStyle={true} />
      <p id="post-topic">{postTopic}</p>
      <p id="post-paragraph">{postParagraph}</p>
    </div>
  );
};

export default PostDiv;