"use client";
import { getCookie } from "@/hooks/usePreviousPath";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function AuthCancelIcon() {
  const router = useRouter();

  return (
    <div className="cancel-icon-div">
      <span className="cancelBtn" onClick={() => {
        router.back();
        if (!decodeURIComponent(getCookie("previousPath") ?? "/").includes("/auth")) router.refresh();
      }}>
        <FaChevronLeft className="cancelIcon" />
        <span className="cancel-text">Back</span>
      </span>
    </div>
  );
}
