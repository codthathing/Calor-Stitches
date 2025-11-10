import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostMainContext } from "../../store/providers/PostMainContext";
import { mockBlogPosts } from "../../lib/data/mockBlogPosts";

const PostToggleDiv = () => {
  let { id, postState, setPostState } = useContext(PostMainContext);
  const navigate = useNavigate();


  const changePost = (toggle) => {
    { (id > 0 && toggle === "PREV") ? id -= 1 : (id < (mockBlogPosts.length - 1) && toggle === "NEXT") && (id += 1) };
    const newPost = mockBlogPosts.find(({ id: post_id }) => post_id === id);
    if (postState !== newPost?.postHead) {
      setPostState(newPost.postHead);
      navigate(`/blog/${newPost.postHead}`);
    }
  };

  return (
    <div id="post-toggle-div">
      <p className="post-toggle-text" onClick={() => changePost("PREV")}>previous post</p>
      <p className="post-toggle-text" onClick={() => changePost("NEXT")}>next post</p>
    </div>
  );
};

export default PostToggleDiv;