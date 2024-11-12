import { Link } from "react-router-dom";

const PostDetails = ({postDetails, defaultStyle, divClass, textClass, linkClass}) => {
  return (
    <div className={`${divClass} post-details-div-style`}>
      {postDetails && postDetails.map(({ id, text, inner_text, style = defaultStyle }) => {
        return (
          <div key={id} className={`${textClass} post-details-div-style`}>
            {text && <p>{text}</p>}
            {inner_text && <div>{inner_text.map(({ id, text, style }) => <Link to={`/blog/post/${text}`} className={linkClass} key={id}>{text}{style && ","} </Link>)}</div>}
            {style && <span>|</span>}
          </div>
        )
      })}
    </div>
  );
};

export default PostDetails;