import { useNavigate } from "react-router-dom";
import PostDetails from "../../post/PostDetails";
import PageButtons from "../../common/PageButtons";

const PostTemplate = ({ postArray, imageClass, buttonClass, type = "link", divClass }) => {
  const navigate = useNavigate();

  return (
    <>
      {postArray.map(({ id, postImage, postDetails, postHead, postParagraph }) => {
        return (
          <div key={id} className={divClass}>
            <img src={postImage} className={imageClass} loading="lazy" alt={`${postHead.toUpperCase()}`} />
            <PostDetails postDetails={postDetails.slice(0, 2)} divClass={"post-display-div"} textClass={"post-dislpay-text"} linkClass={"post-display-link"} />
            <h1 className="postHead">{postHead}</h1>
            <p className="postParagraph">{postParagraph}</p>
            {type === "link" ? <PageButtons type={"text"} textClass={buttonClass} buttonFunction={() => navigate(`/blog/${postHead}`)} text={"read more"} /> : <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} buttonFunction={() => navigate(`/blog/${postHead}`)} text={"read more"} />}
          </div>
        );
      })}
    </>
  );
};

export default PostTemplate;