"use client";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function FeatureSearchCancelIcon() {
  const router = useRouter();

  return <FaTimes onClick={() => {
    router.back();
    router.refresh();
  }} className="navBackIcon" id="search-cancel-icon" />;
}
