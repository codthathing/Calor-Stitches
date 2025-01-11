import { useContext } from "react";
import { PostMainContext } from "../../services/contexts/PostMainContext";
import NewsHandleIcons from "../news-letter/NewsHandleIcons";

const PostAuthorDetails = () => {
  const { postAuthor } = useContext(PostMainContext);

  if(postAuthor) {
    return (
      <div id="post-shown-div">
        <img src={postAuthor.profile_picture} alt="" id="post-shown-image" />
        <div id="post-shown-inner-div">
          <p id="post-shown-head">{postAuthor.name}</p>
          <p id="post-shown-text">{postAuthor.description}</p>
          <NewsHandleIcons className={"post-shown-handle"} />
        </div>
      </div>
    );
  }
};

export default PostAuthorDetails;