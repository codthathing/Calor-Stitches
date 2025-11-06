import { useRef, useEffect } from "react";

export const useSectionScroll = () => {
  const presentScroll = useRef(null);

  useEffect(() => {
    if (presentScroll.current) {
      presentScroll.current.style.overflowY = "auto";
    };

    return () => {
      if (presentScroll.current) {
        presentScroll.current.style.overflowY = "hidden";
      };
    };
  }, []);

  return { presentScroll };
};
