const LinkMainTemplate = () => {
  const linkMain = [
    { id: 0, linkHead: "Shop", linkTexts: [{id: 0, text: "DRESSES"}, {id: 1, text: "T-SHIRTS"}, {id: 3, text:"BLOUSES"}, {id: 4, text: "OUTERWEAR"}, {id: 5, text: "ACCESSORIES"}, {id: 6, text: "KNITWEAR"}, {id: 7, text: "PANTS"}] },
    { id: 1, linkHead: "Links", linkTexts: [{id: 0, text: "ABOUT US"}, {id: 1, text: "STORE LOCATIONS"}, {id: 2, text: "SHIPPING & RETURNS"}, {id: 3, text: "SUSTAINABILITY"}, {id: 4, text: "HELP & FAQS"}, {id: 5, text: "CONTACTS"}] },
    { id: 2, linkHead: "Help", linkTexts: [{id: 0, text: "PRIVACY POLICY"}, {id: 1, text: "REFUND POLICY"}, {id: 2, text: "ORDER STATUS"}, {id: 3, text: "GIFT CARDS"}, {id: 4, text: "SIZE GUIDE"}] }
  ]

  return (
    <div id="linksDiv">
      {linkMain.map(({ id, linkHead, linkTexts }) => {
        return (
          <main key={id} className="linkMain">
            <h1 className="linkHead">{linkHead}</h1>
            <nav className="linkNav">
              {linkTexts.map(({id, text}) => {
                return <p key={id} className="linkText">{text}</p>
              })}
            </nav>
          </main>
        );
      })}
    </div>
  );
}

export default LinkMainTemplate;