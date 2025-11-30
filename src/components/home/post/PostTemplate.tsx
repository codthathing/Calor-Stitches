import HomePostButton from "@/components/layout/home-post/HomePostButton";
import PostDetails from "@/components/post/PostDetails";
import { BlogType } from "@/types/blogType";
import Image from "next/image";

interface PostTemplate {
  postArray: BlogType[];
  imageClass: string;
  buttonClass: string;
  type?: string;
  divClass: string;
}

export default function PostTemplate({ postArray, imageClass, buttonClass, type = "link", divClass }: PostTemplate) {
  return (
    <>
      {postArray.map(({ id, postImage, postDetails, postHead, postParagraph }) => {
        return (
          <div key={id} className={divClass}>
            <Image src={postImage} className={imageClass} loading="lazy" alt={`${postHead.toUpperCase()}`} />
            <PostDetails postDetails={postDetails.slice(0, 2)} divClass={"post-display-div"} textClass={"post-dislpay-text"} linkClass={"post-display-link"} />
            <h1 className="postHead">{postHead}</h1>
            <p className="postParagraph">{postParagraph}</p>
            <HomePostButton type={type} buttonClass={buttonClass} postHead={postHead} />
          </div>
        );
      })}
    </>
  );
}
