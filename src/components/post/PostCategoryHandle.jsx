import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostMainContext } from "../../services/contexts/PostMainContext";
import WishlistHandle from "../wishlist/WishlistHandle";

const PostCategoryHandle = () => {
  const { postDetails } = useContext(PostMainContext);

  return (
    <div id="post-category-handle-div">
      {postDetails && postDetails.filter(({ inner_text }) => inner_text).map(({ id, inner_text }) => {
        return (
          <div id="post-category-div" key={id}>
            {inner_text && inner_text.map(({ id, text, style }) => <Link to={`/blog/post/${text}`} className="post-category-text" key={id}>{text}{style && ","} </Link>)}
          </div>
        );
      })}
      <WishlistHandle />
    </div>
  );
};

export default PostCategoryHandle;