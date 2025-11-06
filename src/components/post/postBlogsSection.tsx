import { useContext } from "react";
import { PostBlogsContext } from "../../store/providers/PostBlogsContext";
import PostTemplate from "../home/post/PostTemplate";

const PostBlogsSection = () => {
  const { filteredPost } = useContext(PostBlogsContext);

  return (
    <section className="post-main-section">
      <div id="post-other-div">{filteredPost && <PostTemplate postArray={filteredPost} imageClass={"post-other-image"} buttonClass={"post-other-button"} type={"button"} />}</div>
    </section>
  );
};

export default PostBlogsSection;
