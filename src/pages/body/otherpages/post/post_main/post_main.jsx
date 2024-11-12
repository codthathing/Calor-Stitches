import PostDiv from "./post_div";
import PostCategoryHandle from "./post_category_handle";
import PostAuthor from "./post_author";
import PostToggle from "./post_toggle";
import AboutReview from "../../review/about/about_review";

const PostMain = () => {
  return (
    <section className="post-main-section">
      <PostDiv />
      <PostCategoryHandle />
      <PostAuthor />
      <PostToggle />
      <AboutReview showReviewText={false} reviewText={"Leave A Reply"} showRating={false} reviewPlaceholder={"Your Comment *"} reviewButton={"POST COMMENT"} />
    </section>
  );
};

export default PostMain;