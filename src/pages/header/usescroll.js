import { useRef, useEffect } from "react";

export const useScroll = (page, body) => {
  const presentScroll = useRef(null);
  useEffect(() => {
    document.querySelector("body").style.overflowY = body;
    if(presentScroll.current) {
      presentScroll.current.style.overflowY = page;
    }
  }, [page, body]);

  return {presentScroll};
}