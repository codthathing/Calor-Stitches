import PostTemplate from "../home/post/PostTemplate";
import { BlogType } from "@/types/blogType";

export default function PostBlogsSection({ posts } : { posts: BlogType[] }) {
  return (
    <section className="post-main-section">
      <div id="post-other-div">{posts && <PostTemplate postArray={posts} imageClass={"post-other-image"} buttonClass={"post-other-button"} type={"button"} />}</div>
    </section>
  );
};
