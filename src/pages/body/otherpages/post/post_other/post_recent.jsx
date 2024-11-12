import { Link } from "react-router-dom";
import { posts } from "../../../frontpage/innerpages/post/blog_posts";
import PostText from "./post_text";

const PostRecent = () => {
  return (
    <div className="post-inner-div">
      <PostText text={"recent posts"} />
      <div id="post-recent-div">
        {posts.slice(0, 3).map(({ id, postImage, postDetails, postHead }) => {
          return (
            <Link key={id} style={{ textDecoration: "none" }} to={`/blog/${postHead}`}>
              <div className="post-recent-inner-div">
                <img src={postImage} alt="" className="post-recent-image" />
                <div className="post-recent-text-div">
                  {postDetails && <p className="post-recent-head">{postDetails[0].text}</p>}
                  <p className="post-recent-text">{postHead}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostRecent;