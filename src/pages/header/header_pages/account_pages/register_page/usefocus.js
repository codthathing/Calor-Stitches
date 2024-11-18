import { useRef, useEffect } from "react";

export const useFocus = () => {
  const inputFocus = useRef(null);
  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);

  return { inputFocus };
};