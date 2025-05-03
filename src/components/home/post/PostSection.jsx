import { mockBlogPosts } from "../../../database/mockBlogPosts";
import PostTemplate from "./PostTemplate";

const PostSection = () => {
  return (
    <section id="postSection">
      <div id="postHeadDiv">
        <p className="product-section-para paragraphStyles">FROM THE BLOGS</p>
        <p className="product-section-head">Check Out Our Latest Posts</p>
      </div>
      <main id="mainPost">
        <PostTemplate postArray={mockBlogPosts.slice(0, 3)} imageClass={"postImage"} buttonClass={"post-home-button"} divClass={"mainPostDiv"} />
      </main>
    </section>
  );
};

export default PostSection;
