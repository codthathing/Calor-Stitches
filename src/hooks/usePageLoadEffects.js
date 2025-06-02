import { useEffect } from "react";

export const usePageLoadEffects = ({ effectsArray, dependency }) => {
  useEffect(() => {
    const timeout = setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 500);

    for (let i = 0; i < effectsArray?.length; i++) {
      effectsArray[i]?.effect(effectsArray[i]?.value);
    }

    return () => clearTimeout(timeout);
  }, [dependency]);
};
