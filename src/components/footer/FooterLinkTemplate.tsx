import FooterLinks from "./FooterLinks";

const FooterLinkTemplate = () => {
  const linkMain = [
    { id: 0, linkHead: "Shop", type: "link", linkTexts: [{ id: 0, text: "dresses" }, { id: 1, text: "t-shirts" }, { id: 2, text: "jeans" }, { id: 3, text: "outerwears" }, { id: 4, text: "activewears" }, { id: 5, text: "sweaters" }] },
    { id: 1, linkHead: "Links", type: "text", linkTexts: [{ id: 0, text: "ABOUT US" }, { id: 1, text: "STORE LOCATIONS" }, { id: 2, text: "SHIPPING & RETURNS" }, { id: 3, text: "SUSTAINABILITY" }, { id: 4, text: "HELP & FAQS" }, { id: 5, text: "CONTACTS" }] },
    { id: 2, linkHead: "Help", type: "text", linkTexts: [{ id: 0, text: "PRIVACY POLICY" }, { id: 1, text: "REFUND POLICY" }, { id: 2, text: "ORDER STATUS" }, { id: 3, text: "GIFT CARDS" }, { id: 4, text: "SIZE GUIDE" }] }
  ]

  return (
    <div id="linksDiv">
      {linkMain.map(({ id, linkHead, type, linkTexts }) => {
        return (
          <main key={id} className="linkMain">
            <h1 className="linkHead">{linkHead}</h1>
            <FooterLinks type={type} linkTexts={linkTexts} />
          </main>
        );
      })}
    </div>
  );
}

export default FooterLinkTemplate;