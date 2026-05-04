"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import { useState } from "react";

export default function AboutNavigationLinks() {
  const { displayPage: page, setDisplayPage: setPage } = useReviewContext();

  const [array, setArray] = useState([
    { id: 0, text: "DESCRIPTION", style: true },
    { id: 1, text: "REVIEW", style: false }
  ]);
  
  const changeLinkHover = (id: number, toggle: boolean) => {
    const updatedLinks = array.map((link) => {
      if (link.id === id && link.text !== page) {
        return { ...link, style: toggle };
      } else {
        return link;
      }
    });
    setArray(updatedLinks);
  };

  const changeLink = (id: number) => {
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
        return <p key={id} onClick={() => changeLink(id)} onMouseEnter={() => changeLinkHover(id, true)} onMouseLeave={() => changeLinkHover(id, false)} style={{ borderBottom: style ? "1px solid #222222" : "none" }} className="productAboutMainTexts">{text}</p>;
      })}
    </main>
  );
}
