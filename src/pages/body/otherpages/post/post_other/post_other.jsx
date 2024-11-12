import PostText from "./post_text";
import PostCategories from "./post_categories";
import PostRecent from "./post_recent";
import PostInstagram from "./post_instagram";
import Handle from "../../../../news_section/handle";

const PostOther = () => {
  return (
    <section id="post-other-section">
      <div className="post-inner-div" id="post-input-div">
        <i className="fa-solid fa-magnifying-glass" id="post-input-icon"></i>
        <input type="text" placeholder="What are you looking for?" id="post-input-field" />
      </div>
      <div className="post-inner-div">  
        <PostText text={"categories"} />
        <PostCategories id={"post-categories-div"} showComma={false} tag={""} />
      </div>
      <PostRecent />
      <div className="post-inner-div">
        <PostText text={"tags"} />
        <PostCategories id={"post-tag-div"} showComma={true} tag={"tag: "} />
      </div>
      <PostInstagram />
      <div className="post-inner-div">
        <PostText text={"follow us"} />
        <Handle className={"post-shown-handle"} />
      </div>
    </section>
  );
};

export default PostOther;