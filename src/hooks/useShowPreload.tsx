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
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!hasTransitioned.current) return;

    if (isPending) {
      if (showPreloadOnTransition.current) setPreload(true);
    } else {
      const wasShowingPreload = showPreloadOnTransition.current;
      setPreload(false);
      hasTransitioned.current = false;
      showPreloadOnTransition.current = false;

      timeoutRef.current = setTimeout(() => dispatch({ type: "CLOSE" }), wasShowingPreload ? 1250 : 2000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isPending, dispatch]);

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
    clearTimeout(timeoutRef.current);

    if (currentPath === page) {
      timeoutRef.current = setTimeout(() => dispatch({ type: "CLOSE" }), 2000);
      return;
    }

    hasTransitioned.current = true;
    showPreloadOnTransition.current = false;

    startTransition(() => {
      if (replace) {
        router.replace(page);
      } else {
        router.push(page);
      }
    });
  };

  return { showPreload, navigateToPage, wishlistStartTransition, preload };
};
