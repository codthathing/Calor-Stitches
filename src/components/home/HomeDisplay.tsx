import display_one from "../../assets/display-images/display-1.jpg";
import display_two from "../../assets/display-images/display-2.jpg";

const HomeDisplay = () => {

  const multipleDisplay = [
    {
      id: 0,
      displayImage: display_one,
      displayTopic: "DEFINING NEW FASHION",
      displayHead: "Fashionable, True Elegant& Looks So Good!",
      displayParagraph: "Our products use finest materials and stunning design to create something special. Transformative colours, bold textiles and unique prints, natural fibres with high our quality craftsmanship design remains at forefront. We believe in creating unique products, so we use finest materials and stunning design to create special items.",
      displayButton: "LEARN MORE"
    },
    {
      id: 1,
      displayImage: display_two,
      displayTopic: "EXPLORE OUR COLLECTIONS",
      displayHead: "Innovative, An Unobtrusive & Honest Beauty!",
      displayParagraph: "Our values are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with versatility and top of mind allowing the investment pieces. Our production lines are intentionally small with a focus on natural fabrications and unique seasonless design.",
      displayButton: "SHOP COLLECTION"
    }
  ]

  return (
    <>
      {multipleDisplay.map(({ id, displayImage, displayTopic, displayHead, displayParagraph, displayButton }) => {
        return (
          <div key={id} id="displayDiv">
            <div className="imageDiv">
              <img src={displayImage} alt="display_image" className="displayImage" />
            </div>
            <main className="mainDisplay">
              <p className="paragraphStyles displayTopic">{displayTopic}</p>
              <h1 className="displayHead">{displayHead}</h1>
              <p className="displayParagraph">{displayParagraph}</p>
              <button className="displayButton">{displayButton}</button>
            </main>
          </div>
        );
      })}
    </>
  );
}

export default HomeDisplay;