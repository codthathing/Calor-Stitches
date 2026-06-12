"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useNavigateToConfirm = () => {
  const [confirm, setConfirm] = useState({ confirmPage: "", confirmHead: "", confirmText: "" });
  const router = useRouter();

  useEffect(() => {
    if (confirm.confirmPage && confirm.confirmHead && confirm.confirmText) {
      router.push(`/pages/confirm-page?link=${confirm.confirmPage}&head=${confirm.confirmHead}&text=${confirm.confirmText}`);
    }
  }, [confirm]);

  return { setConfirm };
};