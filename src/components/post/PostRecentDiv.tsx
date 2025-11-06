import { mockBlogPosts } from "../../database/mockBlogPosts";
import PostText from "./PostText";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const PostRecentDiv = () => {
  const navigate = useNavigateToPage();

  return (
    <div className="post-inner-div">
      <PostText text={"recent posts"} />
      <div id="post-recent-div">
        {mockBlogPosts.slice(0, 3).map(({ id, postImage, postDetails, postHead }) => {
          return (
            <div key={id} onClick={() => navigate(`/blog/${postHead}`)} className="post-recent-inner-div">
              <img src={postImage} loading="lazy" alt={postHead} className="post-recent-image" />
              <div className="post-recent-text-div">
                {postDetails && <p className="post-recent-head">{postDetails[0].text}</p>}
                <p className="post-recent-text">{postHead}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostRecentDiv;