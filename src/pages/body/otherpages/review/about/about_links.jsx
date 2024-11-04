import { useContext, useState } from "react";
import { ReviewContext } from "../productreview";

const AboutLinks = () => {
  const { displayPage, setDisplayPage } = useContext(ReviewContext);

  const [linksArray, setLinksArray] = useState([
    { id: 0, text: "DESCRIPTION", style: true },
    { id: 1, text: "REVIEW", style: false }
  ]);

  const ChangeLinkHover = (id, toggle) => {
    const updatedLinks = linksArray.map((link) => {
      if(link.id === id && link.text !== displayPage) {
        return {...link, style: toggle};
      } else {
        return link;
      };
    });
    setLinksArray(updatedLinks);
  };

  const ChangeLink = (id) => {
    const updatedLinks = linksArray.map((link) => {
      if(link.id === id) {
        setDisplayPage(link.text);
        return {...link, style: true};
      } else {
        return {...link, style: false};
      }
    }); 
    setLinksArray(updatedLinks);
  };

  return (
    <main id="productAboutMain">
      {linksArray.map(({id, text, style}) => {
        return <p key={id} onClick={() => ChangeLink(id)} onMouseEnter={() => ChangeLinkHover(id, true)} onMouseLeave={() => ChangeLinkHover(id, false)} style={{borderBottom: style ? "1px solid #222222" : "none"}} className="productAboutMainTexts">{text}</p>
      })}
    </main>
  );
};

export default AboutLinks;