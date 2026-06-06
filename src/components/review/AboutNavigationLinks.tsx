"use client";
import { useState } from "react";
import TabNavigations from "../common/TabNavigations";
import { useReviewContext } from "@/store/providers/ReviewProvider";

export default function AboutNavigationLinks() {
  const [abooutNavigationArray, setAboutNavigationArray] = useState([
    { id: 0, text: "DESCRIPTION", style: true },
    { id: 1, text: "REVIEW", style: false }
  ]);

  const { aboutNavigation, setAboutNavigation } = useReviewContext();

  return <TabNavigations array={abooutNavigationArray} setArray={setAboutNavigationArray} tab={aboutNavigation} setTab={setAboutNavigation} />
}
