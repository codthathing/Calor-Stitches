"use client";
import { WishlistActionType } from "@/types/wishlistType";
import { useRouter } from "next/navigation";
import { ActionDispatch, useEffect, useRef, useState, useTransition } from "react";

export const useShowPreload = (dispatch: ActionDispatch<[action: WishlistActionType]>) => {
  const [preload, setPreload] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const hasTransitioned = useRef<boolean>(false);
  const showPreloadOnTransition = useRef<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!hasTransitioned.current) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (isPending) {
      if (showPreloadOnTransition.current) setPreload(true);
    } else {
      setPreload(false);
      hasTransitioned.current = false;
      showPreloadOnTransition.current = false;
      timeout = setTimeout(() => dispatch({ type: "CLOSE" }), 1250);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isPending]);

  const showPreload = () => {
    setPreload(true);
    setTimeout(() => setPreload(false), 2000);
  };

  const navigateToPage = (page: string) => {
    hasTransitioned.current = true;
    showPreloadOnTransition.current = true;
    startTransition(() => router.push(page));
  };

  const wishlistStartTransition = (page: string, replace: boolean, currentPath: string) => {
    hasTransitioned.current = true;
    showPreloadOnTransition.current = false;
    startTransition(() => {
      if (replace || currentPath === page) {
        router.replace(page);
      } else {
        router.push(page);
      }
    });
  };

  return { showPreload, navigateToPage, wishlistStartTransition, preload };
};
