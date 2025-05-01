import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const PostDetails = ({postDetails, defaultStyle, divClass, textClass, linkClass}) => {
  const navigate = useNavigateToPage();

  return (
    <div className={`${divClass} post-details-div-style`}>
      {postDetails && postDetails.map(({ id, text, inner_text, style = defaultStyle }) => {
        return (
          <div key={id} className={`${textClass} post-details-div-style`}>
            {text && <p>{text}</p>}
            {inner_text && <div>{inner_text.map(({ id, text, style }) => <span onClick={() => navigate(`/blog/post/${text}`)} className={linkClass} key={id}>{text}{style && ","} </span>)}</div>}
            {style && <span>|</span>}
          </div>
        )
      })}
    </div>
  );
};

export default PostDetails;