"use client";
import { useDisplayContext } from "@/store/providers/DisplayProvider";
import { FaTimes } from "react-icons/fa";

export default function DisplayCancelIcon() {
  const { setShowFilterSection } = useDisplayContext();

  return <FaTimes onClick={() => setShowFilterSection(false)} className="productIcons" id="filterHeaderBackIcon" />
}