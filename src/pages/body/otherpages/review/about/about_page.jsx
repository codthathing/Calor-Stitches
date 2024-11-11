import { useContext } from "react";
import { ReviewContext } from "../productreview";
import AboutDescription from "./about_description";
import AboutReview from "./about_review";

const AboutPage = () => {
  const { displayPage } = useContext(ReviewContext);

  if(displayPage === "DESCRIPTION") {
    return <AboutDescription />;
  } else if (displayPage === "REVIEW") {
    return <AboutReview reviewText={"Add A Review"} reviewPlaceholder={"Your Review *"} reviewButton={"SUBMIT"} />;
  };
};

export default AboutPage;