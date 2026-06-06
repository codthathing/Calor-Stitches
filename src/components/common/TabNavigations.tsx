"use client";
import { Dispatch, SetStateAction } from "react";

interface NavigationLinks {
  array: { id: number; text: string; style: boolean; }[];
  setArray: Dispatch<SetStateAction<{ id: number; text: string; style: boolean; }[]>>;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export default function TabNavigations({ array, setArray, tab, setTab }: NavigationLinks) {
  const changeLinkHover = (id: number, toggle: boolean) => {
    const updatedLinks = array.map((link) => {
      if (link.id === id && link.text !== tab) {
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
        setTab(link.text);
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