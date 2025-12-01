"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { FaTimes } from "react-icons/fa";

export default function UserCartCancelIcon() {
  const { setCart } = useNavigateContext();

  return <FaTimes onClick={() => setCart(false)} className="navBackIcon" />;
}
