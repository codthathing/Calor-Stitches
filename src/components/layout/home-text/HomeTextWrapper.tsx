"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode, useCallback, useEffect, useState } from "react";
import HomeTextDetails from "./HomeTextDetails";

export default function HomeTextWrapper({ children }: { children: ReactNode }) {
  const { home_section } = useNavigateContext();

  const [pageDetails, setPageDetails] = useState({
    text: "Outrageous Fashion Always For You",
    array: [
      { id: 1, head: "Outrageous Fashion Always For You", style: true },
      { id: 2, head: "Inspired By Nature & Crafted With Love", style: false },
    ],
  });

  const frontTextAnimation = useCallback(() => {
    let changeDetails = 1;

    const timeoutId = setInterval(() => {
      changeDetails = changeDetails < pageDetails.array.length ? changeDetails + 1 : 1;

      setPageDetails((prevState) => ({
        text: prevState.array.find(({ id }) => id === changeDetails)!.head,
        array: prevState.array.map((text) => ({ ...text, style: text.id === changeDetails })),
      }));
    }, 5000);

    return () => clearInterval(timeoutId);
  }, [pageDetails.array.length]);

  useEffect(() => {
    const cleanup = frontTextAnimation();

    return cleanup;
  }, [frontTextAnimation]);

  return (
    <section ref={home_section} id="front-page-div">
      {children}
      <HomeTextDetails pageDetails={pageDetails} />
    </section>
  );
}
