"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export const useNavigateToPage = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    startTransition(() => {
      router.push(page);
    });
  };

  return navigate;
};
