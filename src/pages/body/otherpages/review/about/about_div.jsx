import { useContext, useState } from "react";
import { ReviewContext } from "../productreview";
import AboutLinks from "./about_links";
import AboutPage from "./about_page";

const AboutDiv = () => {
  const { displayPage, setDisplayPage } = useContext(ReviewContext);

  const [linksArray, setLinksArray] = useState([
    { id: 0, text: "DESCRIPTION", style: true },
    { id: 1, text: "REVIEW", style: false }
  ]);

  return (
    <div id="productAbout">
      <AboutLinks page={displayPage} setPage={setDisplayPage} array={linksArray} setArray={setLinksArray} />
      <AboutPage />
    </div>
  );
};

export default AboutDiv;