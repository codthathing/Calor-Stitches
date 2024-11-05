import { useState } from "react";

const AboutRating = () => {
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

  const ChangeRating = (id) => {
    const updatedRating = ratings.map((rating) => ({ ...rating, style: rating.id <= id }));
    setRatings(updatedRating);
  }

  return (
    <section id="about-rating-section">
      <p className="about-inner-text">Your rating *</p>
      <div id="rating-icons-div">
        {ratings.map(({ id, style }) => {
          return <i key={id} onClick={() => ChangeRating(id)} className={`fa-${style ? "solid" : "regular"} fa-star rating-icon`}></i>
        })}
      </div>
    </section>
  );
};

export default AboutRating;