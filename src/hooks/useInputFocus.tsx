"use client";
import { useRef, useEffect } from "react";

export const useInputFocus = () => {
  const inputFocus = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    };
  }, []);

  return { inputFocus };
};