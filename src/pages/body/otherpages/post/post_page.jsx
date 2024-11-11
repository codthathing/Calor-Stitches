import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import { posts } from "../../frontpage/innerpages/post/blog_posts";
import WishlistHandle from "../wishlist/wishlist_handle";
import Handle from "../../../news_section/handle";
import AboutReview from "../review/about/about_review";

const PostPage = () => {
  const { setToggleSideMenu } = useContext(ToggleRegister)

  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }]);

  const { post_head } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const presentBlog = posts.find((post) => post.postHead === post_head);
    setBlog(presentBlog);
  }, [post_head]);

  const { id, postImage, postDetails, postDate, postCategory, postHead: postTopic, postParagraph } = blog;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "blog standard", linkArrow: true },
    { id: 2, linkDirect: "", linkText: (postCategory && postCategory[0].text), linkArrow: true },
    { id: 3, linkDirect: "", linkText: postTopic, linkArrow: false },
  ]

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="post-main">
        <section id="post-main-section">
          <div id="post-section-div">
            <div id="post-image-div"><img src={postImage} alt={postTopic} id="post-image" /></div>
            <div id="post-details-div" className="post-details-div-style">
              {postDetails && postDetails.map(({ id, text, inner_text, style }) => {
                return (
                  <div key={id} className="post-details-inner-div post-details-div-style">
                    {text && <p className="post-details-text">{text}</p>}
                    {inner_text && <div>{inner_text.map(({id, text, style}) => <span key={id}>{text}{style && ","} </span>)}</div>}
                    {style && <span className="post-details-divider">|</span>}
                  </div>
                )
              })}
            </div>
            <p id="post-topic">{postTopic}</p>
            <p id="post-paragraph">{postParagraph}</p>
          </div>
          <div id="post-category-handle-div">
            {postCategory && <div id="post-category-div">
              {postCategory.map(({id, text, style}) => <span className="post-category-text" key={id}>{text}{style && ","} </span>)}
            </div>}
            <WishlistHandle />
          </div>
          <div id="post-shown-div">
            <img src="" alt="" id="post-shown-image" />
            <div id="post-shown-inner-div">
              <p id="post-shown-head"></p>
              <p id="post-shown-text"></p>
              {/* <Handle id={} /> */}
            </div>
          </div>
          <div id="post-toggle-div">
            <p className="post-toggle-text"></p>
          </div>
          <AboutReview showReviewText={false} reviewText={"Leave A Reply"} showRating={false} reviewPlaceholder={"Your Comment *"} reviewButton={"POST COMMENT"} />
        </section>
        <section id="post-other-section">

        </section>
      </main>
    </div>
  );
};

export default PostPage;