import { posts } from "./blog_posts";
import PostTemplate from "./post_template";

const Post = () => {

  return (
    <section id="postSection">
      <div id="postHeadDiv">
        <p className="product-section-para paragraphStyles">FROM THE BLOGS</p>
        <p className="product-section-head">Check Out Our Latest Posts</p>
      </div>
      <main id="mainPost">
        <PostTemplate postArray={posts.slice(0, 3)} imageClass={"postImage"} buttonClass={"postRead"} divClass={"mainPostDiv"} />
      </main>
    </section>
  );
}

export default Post;