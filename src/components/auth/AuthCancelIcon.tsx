"use client";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function AuthCancelIcon() {
  const router = useRouter();

  return (
    <span className="cancelBtn" onClick={() => router.back()}>
      <FaTimes className="cancelIcon" />
    </span>
  );
};
