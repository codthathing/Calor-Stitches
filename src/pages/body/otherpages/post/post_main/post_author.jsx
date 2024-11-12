import { useContext } from "react";
import { PostContext } from "../post_page";
import Handle from "../../../../news_section/handle";

const PostAuthor = () => {
  const { postAuthor } = useContext(PostContext);

  if(postAuthor) {
    return (
      <div id="post-shown-div">
        <img src={postAuthor.profile_picture} alt="" id="post-shown-image" />
        <div id="post-shown-inner-div">
          <p id="post-shown-head">{postAuthor.name}</p>
          <p id="post-shown-text">{postAuthor.description}</p>
          <Handle className={"post-shown-handle"} />
        </div>
      </div>
    );
  }
};

export default PostAuthor;