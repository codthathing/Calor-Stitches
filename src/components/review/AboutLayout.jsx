import { useContext } from "react";
import { ReviewContext } from "../../services/contexts/ReviewContext";
import AboutDescription from "./AboutDescription";
import AboutReview from "./AboutReview";

const AboutLayout = () => {
  const { displayPage } = useContext(ReviewContext);

  if(displayPage === "DESCRIPTION") {
    return <AboutDescription />;
  } else if (displayPage === "REVIEW") {
    return <AboutReview reviewText={"Add A Review"} reviewPlaceholder={"Your Review *"} reviewButton={"SUBMIT"} />;
  };
};

export default AboutLayout;