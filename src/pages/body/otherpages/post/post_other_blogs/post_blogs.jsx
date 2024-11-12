import { useContext } from "react";
import { PostOtherContext } from "./post_other_blogs";
import PostTemplate from "../../../frontpage/innerpages/post/post_template";

const PostBlogs = () => {
  const { filteredPost } = useContext(PostOtherContext);

  return (
    <section className="post-main-section">
      <div id="post-other-div">
        {filteredPost && <PostTemplate postArray={filteredPost} imageClass={"post-other-image"} buttonClass={"post-other-button"} type={"button"} />}
      </div>
    </section>
  );
};

export default PostBlogs;