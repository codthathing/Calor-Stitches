import { useContext, useState } from "react";
import { ReviewContext } from "../../services/contexts/ReviewContext";
import AboutNavigationLinks from "./AboutNavigationLinks";
import AboutLayout from "./AboutLayout";

const AboutSection = () => {
  const { displayPage, setDisplayPage } = useContext(ReviewContext);

  const [linksArray, setLinksArray] = useState([
    { id: 0, text: "DESCRIPTION", style: true },
    { id: 1, text: "REVIEW", style: false }
  ]);

  return (
    <div id="productAbout">
      <AboutNavigationLinks page={displayPage} setPage={setDisplayPage} array={linksArray} setArray={setLinksArray} />
      <AboutLayout />
    </div>
  );
};

export default AboutSection;