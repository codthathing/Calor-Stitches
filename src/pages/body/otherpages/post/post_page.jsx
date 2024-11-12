import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import { posts } from "../../frontpage/innerpages/post/blog_posts";
import PostMain from "./post_main/post_main";
import PostOther from "./post_other/post_other";

export const PostContext = createContext();
const PostPage = () => {
  const { setToggleSideMenu } = useContext(ToggleRegister)

  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);

  const { post_head } = useParams();
  const [blog, setBlog] = useState({});

  const [postState, setPostState] = useState(post_head);

  useEffect(() => {
    const presentBlog = posts.find((post) => post.postHead === postState);
    setBlog(presentBlog);
  }, [postState]);

  const { id, postImage, postDetails, postAuthor, postHead: postTopic, postParagraph } = blog;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
    { id: 2, linkDirect: "", linkText: (postDetails && postDetails.find(({ inner_text }) => inner_text)?.inner_text.find(({ id }) => id === 0).text), linkArrow: true },
    { id: 3, linkDirect: "", linkText: postTopic, linkArrow: false },
  ]

  return (
    <PostContext.Provider value={{ postState, setPostState, id, postImage, postAuthor, postTopic, postDetails, postParagraph }}>
      <div className="otherPages">
        <PageLinkTemplate pageLinks={pageLinkDetails} />
        <main className="post-main">
          <PostMain />
          <PostOther />
        </main>
      </div>
    </PostContext.Provider>
  );
};

export default PostPage;