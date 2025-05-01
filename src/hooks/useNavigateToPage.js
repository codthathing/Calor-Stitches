import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToPage = () => {
  const navigateToPage = useNavigate();

  const navigate = (page, object) => {
    startTransition(() => {
      navigateToPage(page, object);
    });
  };

  return navigate;
};