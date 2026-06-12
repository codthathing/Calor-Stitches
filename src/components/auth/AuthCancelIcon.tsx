"use client";
import { useRouter } from "next/navigation";
import { FaX } from "react-icons/fa6";

export default function AuthCancelIcon() {
  const router = useRouter();

  return (
    <div className="cancel-icon-div">
      <span className="cancelBtn" onClick={() => {
        router.back();
        router.refresh();
      }}>
        <FaX className="cancelIcon" />
      </span>
    </div>
  );
}
