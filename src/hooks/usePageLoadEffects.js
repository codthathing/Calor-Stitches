import { useEffect, useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";

export const usePageLoadEffects = ({ effectsArray, dependency }) => {
  const { setToggleSideMenu } = useContext(NavigateContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setToggleSideMenu(false);
    for (let i = 0; i < effectsArray?.length; i++) {
      effectsArray[i]?.effect(effectsArray[i]?.value);
    }
  }, [dependency]);
};
