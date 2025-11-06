const AboutNavigationLinks = ({ page, setPage, array, setArray }) => {

  const changeLinkHover = (id, toggle) => {
    const updatedLinks = array.map((link) => {
      if (link.id === id && link.text !== page) {
        return { ...link, style: toggle };
      } else {
        return link;
      };
    });
    setArray(updatedLinks);
  };

  const changeLink = (id) => {
    const updatedLinks = array.map((link) => {
      if (link.id === id) {
        setPage(link.text);
        return { ...link, style: true };
      } else {
        return { ...link, style: false };
      }
    });
    setArray(updatedLinks);
  };

  return (
    <main id="productAboutMain">
      {array.map(({ id, text, style }) => {
        return <p key={id} onClick={() => changeLink(id)} onMouseEnter={() => changeLinkHover(id, true)} onMouseLeave={() => changeLinkHover(id, false)} style={{ borderBottom: style ? "1px solid #222222" : "none" }} className="productAboutMainTexts">{text}</p>
      })}
    </main>
  );
};

export default AboutNavigationLinks;