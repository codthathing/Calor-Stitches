"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { startTransition } from "react";

export const useShowPreload = () => {
  const { setShowPreload } = useNavigateContext();

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
