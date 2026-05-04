import WishlistHandle from "../wishlist/WishlistHandle";
import PostCategoryDetails from "./PostCategoryDetails";

export default function PostCategoryHandle() {
  return (
    <div id="post-category-handle-div">
      <PostCategoryDetails />
      <WishlistHandle />
    </div>
  );
};
