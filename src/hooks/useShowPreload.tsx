import { startTransition, useContext } from "react";
import { NavigateContext } from "../store/providers/NavigateProvider";

export const useShowPreload = () => {
  const { setShowPreload } = useContext(NavigateContext);

  const showPreload = () => {
    startTransition(() => {
      setShowPreload(true);
      const timeout = setTimeout(() => {
        setShowPreload(false);
        clearTimeout(timeout);
      }, 2000);
    });
  };

  return { showPreload };
};
