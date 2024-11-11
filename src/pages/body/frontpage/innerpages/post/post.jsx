import { Link } from "react-router-dom";
import { posts } from "./blog_posts";

const PostTemplate = () => {

  return (
    <section id="postSection">
      <div id="postHeadDiv">
        <p className="product-section-para paragraphStyles">FROM THE BLOGS</p>
        <p className="product-section-head">Check Out Our Latest Posts</p>
      </div>
      <main id="mainPost">
        {posts.map(({ id, postImage, postDate, postCategory, postHead, postParagraph }) => {
          return (
            <div key={id} className="mainPostDiv">
              <img src={postImage} className="postImage" alt="post_image" />
              <p className="paragraphStyles postDate">
                <span>{postDate}</span> | {postCategory.map(({id, text, style}) => <span key={id}>{text}{style && ","} </span>)}
              </p>
              <h1 className="postHead">{postHead}</h1>
              <p className="postParagraph">{postParagraph}</p>
              <Link to={`/blog/${postHead}`} className="postRead">READ MORE</Link>
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default PostTemplate;