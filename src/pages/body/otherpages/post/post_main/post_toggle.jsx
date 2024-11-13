import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../post_page";
import { posts } from "../../../frontpage/innerpages/post/blog_posts";

const PostToggle = () => {
  let { id, postState, setPostState } = useContext(PostContext);
  const navigate = useNavigate();


  const ChangePost = (toggle) => {
    { (id > 0 && toggle === "PREV") ? id -= 1 : (id < (posts.length - 1) && toggle === "NEXT") && (id += 1) };
    const newPost = posts.find(({ id: post_id }) => post_id === id);
    if (postState !== newPost?.postHead) {
      setPostState(newPost.postHead);
      navigate(`/blog/${newPost.postHead}`);
    }
  };

  return (
    <div id="post-toggle-div">
      <p className="post-toggle-text" onClick={() => ChangePost("PREV")}>previous post</p>
      <p className="post-toggle-text" onClick={() => ChangePost("NEXT")}>next post</p>
    </div>
  );
};

export default PostToggle;