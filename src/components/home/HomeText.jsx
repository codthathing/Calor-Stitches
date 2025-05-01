import { useCallback, useContext, useEffect, useState } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { scrollToSection } from "../../utils/scrollToSection";
import PageButtons from "../common/PageButtons";
import background_landscape from "../../assets/background-images/background-landscape.webp";
import background_portrait from "../../assets/background-images/background-portrait.webp";
import { LuEthernetPort } from "react-icons/lu";

const HomeText = () => {
  const { product_section, home_section } = useContext(NavigateContext);

  const [pageDetails, setPageDetails] = useState({
    text: "Outrageous Fashion Always For You", 
    array: [
      { id: 1, head: "Outrageous Fashion Always For You", style: true },
      { id: 2, head: "Inspired By Nature & Crafted With Love", style: false }
    ]
  });

  const frontTextAnimation = useCallback(() => {
    let changeDetails = 1;

    const timeoutId = setInterval(() => {
      changeDetails = changeDetails < pageDetails.array.length ? changeDetails + 1 : 1;
      
      setPageDetails(prevState => ({
        text: prevState.array.find(({ id }) => id === changeDetails).head,
        array: prevState.array.map((text) => ({ ...text, style: text.id === changeDetails }))
      }));
    }, 5000);
  
    return () => clearInterval(timeoutId);
  }, []);
  
  useEffect(() => {
    const cleanup = frontTextAnimation();

    return cleanup;
  }, []);

  return (
    <section ref={home_section} id="frontPage">
      <picture style={{ width: "100%", height: "100%", position: "absolute", zIndex: "-1" }}>
        <source media="(max-width: 1023px)" srcSet={background_portrait} />
        <img src={background_landscape} alt="BACKGROUND IMAGE" loading="eager" fetchpriority ="high" style={{ width: "100%", height: "100%" }} />
      </picture>
      <div id="displayText">
        <p id="disParagraph" className="paragraphStyles">YOU CAN HAVE ANYTHING YOU WANT IF YOU DRESS FOR IT</p>
        <h1 id="disHead">{pageDetails.text}</h1>
        <PageButtons type={"button"} text={"SHOP NOW"} buttonType={"white-button"} buttonClass={"shop-btn"} buttonFunction={() => scrollToSection(product_section)} />
        <div id="disDiv">
          {pageDetails.array.map(({ id, style }) => <span key={id} className={`dispay-number ${style ? "style-display-number" : ""}`}>{id}</span>)}
        </div>
      </div>
    </section>
  );
}

export default HomeText;