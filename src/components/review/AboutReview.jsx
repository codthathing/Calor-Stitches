import AboutReviewRating from "./AboutReviewRating";
import PageButtons from "../common/PageButtons";

const AboutReview = ({id, showReviewText = true, reviewText, showRating = true, reviewPlaceholder, reviewButton}) => {
  return (
    <div className="productAboutDivs">
      {showReviewText && <main className="product-about-main">
        <p className="about-main-text">Reviews</p>
        <div id="about-inner-div">
          <p className="about-inner-text">There are no reviews yet.</p>
        </div>
      </main>}
      <main id={id} className="product-about-main">
        <p className="about-main-text">{reviewText}</p>
        <p className="about-inner-text">Your email address will not be published. Required fields are marked *</p>
        <div id="about-rating-div">
          {showRating && <AboutReviewRating />}
          <form id="about-rating-form">
            <div id="rating-input-div">
              <textarea type="text" placeholder={reviewPlaceholder} className="rating-input" />
              <input type="text" placeholder="Your Name *" className="rating-input" />
              <input type="text" placeholder="Your Email *" className="rating-input" />
            </div>
            <div id="rating-details-div">
              <input type="checkbox" id="rating-details-checkbox" />
              <p className="about-inner-text">Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"rating-submit-button"} text={reviewButton} />
          </form>
        </div>
      </main>
    </div>
  );
};

export default AboutReview;