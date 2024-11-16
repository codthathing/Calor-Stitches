import { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../../contextpage";
import { useScrollToSection } from "../../../components/use_show_section";
import PageButtons from "../../../components/page_buttons";

const FrontText = () => {
  const { product_section, home_section } = useContext(ToggleRegister);
  const { scrollToSection } = useScrollToSection(product_section);

  const [pageDetails, setPageDetails] = useState({
    text: "Outrageous Fashion Always For You", array: [
      { id: 1, head: "Outrageous Fashion Always For You", style: true },
      { id: 2, head: "Inspired By Nature & Crafted With Love", style: false }
    ]
  });

  const [changeDetails, setChangeDetails] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChangeDetails(prevState => prevState < pageDetails.array.length ? prevState + 1 : 1);
    }, 5000);
    setPageDetails(prevState => ({
      text: prevState.array.find(({ id }) => id === changeDetails).head,
      array: prevState.array.map((text) => ({ ...text, style: text.id === changeDetails }))
    }));

    return () => clearTimeout(timeoutId);
  }, [changeDetails]);

  return (
    <section id="frontPage" ref={home_section}>
      <div id="displayText">
        <p id="disParagraph" className="paragraphStyles">YOU CAN HAVE ANYTHING YOU WANT IF YOU DRESS FOR IT</p>
        <h1 id="disHead">{pageDetails.text}</h1>
        <PageButtons type={"button"} text={"SHOP NOW"} buttonType={"white-button"} buttonClass={"shop-btn"} buttonFunction={scrollToSection} />
        <div id="disDiv">
          {pageDetails.array.map(({ id, style }) => <span key={id} className={`dispay-number ${style ? "style-display-number" : ""}`}>{id}</span>)}
        </div>
      </div>
    </section>
  );
}

export default FrontText;