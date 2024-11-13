import { Link } from "react-router-dom";
import PostDetails from "../../../otherpages/post/components/post_details";

const PostTemplate = ({ postArray, imageClass, buttonClass, type = "link", divClass }) => {
  return (
    <>
      {postArray.map(({ id, postImage, postDetails, postHead, postParagraph }) => {
        return (
          <div key={id} className={divClass}>
            <img src={postImage} className={imageClass} alt="post_image" />
            <PostDetails postDetails={postDetails.slice(0, 2)} divClass={"post-display-div"} textClass={"post-dislpay-text"} linkClass={"post-display-link"} />
            <h1 className="postHead">{postHead}</h1>
            <p className="postParagraph">{postParagraph}</p>
            <Link to={`/blog/${postHead}`} style={{textDecoration: "none"}}>
              {type === "link" ? <span className={buttonClass}>READ MORE</span> : <button className={buttonClass}>READ MORE</button>}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PostTemplate;