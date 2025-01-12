import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const useNavigateToConfirm = () => {
  const [confirm, setConfirm] = useState({ confirmPage: "", confirmHead: "", confirmText: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (confirm.confirmPage && confirm.confirmHead && confirm.confirmText) {
      navigate(`/pages/confirm-page?link=${confirm.confirmPage}&head=${confirm.confirmHead}&text=${confirm.confirmText}`);
    }
  }, [confirm]);

  return { setConfirm };
};