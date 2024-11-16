import { useEffect, useContext } from "react";
import { ToggleRegister } from "../../../contextpage";

export const usePageInitialEffects = ({effectsArray, dependency}) => {
  const { setToggleSideMenu } = useContext(ToggleRegister);

  useEffect(() => {
    window.scrollTo(0, 0);
    setToggleSideMenu(false);
    for(let i = 0; i < effectsArray?.length; i++) {
      effectsArray[i]?.effect(effectsArray[i]?.value);
    };
  }, [dependency]);
};