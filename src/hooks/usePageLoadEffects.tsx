"use client";
import { Dispatch, SetStateAction, useEffect } from "react";

type PageLoadType = {
  effectsArray: { effect: Dispatch<SetStateAction<boolean | number | string>>; value: boolean | number | string }[];
  dependency: boolean | number | string | Dispatch<SetStateAction<boolean | number | string>>;
};

export const usePageLoadEffects = (input: PageLoadType | null) => {
  useEffect(() => {
    const timeout = setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 200);

    input?.effectsArray.forEach(({ effect, value }) => effect(value));

    return () => clearTimeout(timeout);
  }, [input?.dependency]);
};
