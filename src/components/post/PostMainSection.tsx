import PostDetailsMain from "./PostDetailsMain";
import PostCategoryHandle from "./PostCategoryHandle";
import PostAuthorDetails from "./PostAuthorDetails";
import PostToggleDiv from "./PostToggleDiv";
import AboutReview from "../review/AboutReview";

export default function PostMainSection() {
  return (
    <section className="post-main-section">
      <PostDetailsMain />
      <PostCategoryHandle />
      <PostAuthorDetails />
      <PostToggleDiv />
      <AboutReview id={"post-reply-div"} showReviewText={false} reviewText={"Leave A Reply"} showRating={false} reviewPlaceholder={"Your Comment *"} reviewButton={"POST COMMENT"} />
    </section>
  );
};
