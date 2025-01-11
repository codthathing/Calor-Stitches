import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";

export const ShowPreload = () => {
  const { setShowPreload } = useContext(NavigateContext);

  setShowPreload(true);
  document.querySelector("body").style.overflowY = "hidden";
  const timeout = setTimeout(() => {
    document.querySelector("body").style.overflowY = "auto";
    setShowPreload(false);
    clearTimeout(timeout);
  }, 2000);
};
