import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";

export const useShowPreload = () => {
  const { setShowPreload } = useContext(NavigateContext);

  const showPreload = () => {
    setShowPreload(true);
    const timeout = setTimeout(() => {
      setShowPreload(false);
      clearTimeout(timeout);
    }, 2000);
  };

  return { showPreload };
};
