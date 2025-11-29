import { RefObject } from "react";

export const scrollToSection = (section: RefObject<HTMLElement | null>) => {
  if (section.current) section.current.scrollIntoView({ behavior: "smooth" });
};
