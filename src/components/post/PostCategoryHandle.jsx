import { useContext } from "react";
import { PostMainContext } from "../../services/contexts/PostMainContext";
import WishlistHandle from "../wishlist/WishlistHandle";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const PostCategoryHandle = () => {
  const { postDetails } = useContext(PostMainContext);
  const navigate = useNavigateToPage();

  return (
    <div id="post-category-handle-div">
      {postDetails && postDetails.filter(({ inner_text }) => inner_text).map(({ id, inner_text }) => {
        return (
          <div id="post-category-div" key={id}>
            {inner_text && inner_text.map(({ id, text, style }) => <span onClick={() => navigate(`/blog/post/${text}`)} className="post-category-text" key={id}>{text}{style && ","} </span>)}
          </div>
        );
      })}
      <WishlistHandle />
    </div>
  );
};

export default PostCategoryHandle;