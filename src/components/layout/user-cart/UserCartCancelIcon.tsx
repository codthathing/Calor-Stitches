"use client";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function UserCartCancelIcon() {
  const router = useRouter();

  return <FaTimes onClick={() => router.back()} className="navBackIcon" />;
}
