import { useContext } from "react";
import { ToggleRegister } from "../contextpage";

export const useShowPreload = () => {
  const { setShowPreload } = useContext(ToggleRegister);

  const HandlePreload = () => {
    setShowPreload(true);
    document.querySelector("body").style.overflowY = "hidden";
    setTimeout(() => {
      document.querySelector("body").style.overflowY = "auto";
      setShowPreload(false);
    }, 2000);
  };

  return { HandlePreload };
};