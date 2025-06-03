import { startTransition, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateContext } from "../services/contexts/NavigateContext";

export const useNavigateToPage = () => {
  const navigateToPage = useNavigate();
  const { setToggleSideMenu } = useContext(NavigateContext);

  const navigate = (page) => {
    setToggleSideMenu(false);

    startTransition(() => {
      navigateToPage(page);
    });
  };

  return navigate;
};
