import { useEffect } from "react";

export const usePageInitialEffects = (effectsArray = [{}]) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    for(let i = 0; i < effectsArray.length; i++) {
      effectsArray[i].effect(effectsArray[i].value);
    };
  }, [window.location.pathname]);
};