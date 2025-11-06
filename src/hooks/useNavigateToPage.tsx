import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToPage = () => {
  const navigateToPage = useNavigate();

  const navigate = (page) => {
    startTransition(() => {
      navigateToPage(page);
    });
  };

  return navigate;
};
