"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function AuthCancelIcon() {
  const router = useRouter();

  return (
    <div className="cancel-icon-div">
      <span className="cancelBtn" onClick={() => router.back()}>
        <FaChevronLeft className="cancelIcon" />
        <span className="cancel-text">Back</span>
      </span>
    </div>
  );
}
