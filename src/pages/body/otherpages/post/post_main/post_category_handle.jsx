import { useContext } from "react";
import { PostContext } from "../post_page";
import WishlistHandle from "../../wishlist/wishlist_handle";
import { Link } from "react-router-dom";

const PostCategoryHandle = () => {
  const { postDetails } = useContext(PostContext);

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