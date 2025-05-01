import { useEffect, useState } from "react";
import { useNavigateToPage } from "./useNavigateToPage";

export const useNavigateToConfirm = () => {
  const [confirm, setConfirm] = useState({ confirmPage: "", confirmHead: "", confirmText: "" });
  const navigate = useNavigateToPage();

  useEffect(() => {
    if (confirm.confirmPage && confirm.confirmHead && confirm.confirmText) {
      navigate(`/pages/confirm-page?link=${confirm.confirmPage}&head=${confirm.confirmHead}&text=${confirm.confirmText}`);
    }
  }, [confirm]);

  return { setConfirm };
};