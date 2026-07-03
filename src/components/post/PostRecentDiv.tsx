import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import PostText from "./PostText";
import Link from "next/link";
import Image from "next/image";

export default function PostRecentDiv() {
  return (
    <div className="post-inner-div">
      <PostText text={"recent posts"} />
      <div id="post-recent-div">
        {mockBlogPosts.slice(0, 3).map(({ id, postImage, postDetails, postHead }) => {
          return (
            <Link key={id} href={`/blog/${postHead}`} className="post-recent-inner-div">
              <Image height={100} width={75} src={postImage} loading="lazy" alt={postHead} className="post-recent-image" />
              <div className="post-recent-text-div">
                {postDetails && <p className="post-recent-head">{postDetails[0].text}</p>}
                <p className="post-recent-text">{postHead}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
