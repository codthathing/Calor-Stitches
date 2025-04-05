import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const AboutReviewRating = () => {
  const [ratings, setRatings] = useState([
    { id: 0, style: false },
    { id: 1, style: false },
    { id: 2, style: false },
    { id: 3, style: false },
    { id: 4, style: false },
  ]);

  // const ChangeRatingHover = (id, toggle) => {
  //   const updatedRating = ratings.map((rating) => ({ ...rating, style: rating.id <= id ? toggle : rating.style }));
  //   setRatings(updatedRating);
  // };

  const changeRating = (id) => {
    const updatedRating = ratings.map((rating) => ({ ...rating, style: rating.id <= id }));
    setRatings(updatedRating);
  }

  return (
    <section id="about-rating-section">
      <p className="about-inner-text">Your rating *</p>
      <div id="rating-icons-div">
        {ratings.map(({ id, style }) => {
          return <span onClick={() => changeRating(id)} key={id}>{ style ? <FaStar className="rating-icon" /> : <FaRegStar className="rating-icon" /> }</span>
        })}
      </div>
    </section>
  );
};

export default AboutReviewRating;