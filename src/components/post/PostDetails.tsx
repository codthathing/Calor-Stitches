import PostDetailsLinks from "./PostDetailsLinks";

interface PostDetail {
  postDetails: { id: number; text?: string; style?: boolean; inner_text?: { id: number; text: string; style: boolean }[] }[];
  defaultStyle?: boolean;
  divClass: string;
  textClass: string;
  linkClass: string;
}

export default function PostDetails({ postDetails, defaultStyle, divClass, textClass, linkClass }: PostDetail) {
  return (
    <div className={`${divClass} post-details-div-style`}>
      {postDetails &&
        postDetails.map(({ id, text, inner_text, style = defaultStyle }) => {
          return (
            <div key={id} className={`${textClass} post-details-div-style`}>
              {text && <p>{text}</p>}
              <PostDetailsLinks inner_text={inner_text} linkClass={linkClass} />
              {style && <span>|</span>}
            </div>
          );
        })}
    </div>
  );
}

PostDetails;
