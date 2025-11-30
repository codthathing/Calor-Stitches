"use client";
import PageButtons from "@/components/common/PageButtons";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";

export default function HomePostButton({ type, buttonClass, postHead }: { type: string, buttonClass: string, postHead: string }) {
  const navigate = useNavigateToPage();
  
  return <>{type === "link" ? <PageButtons type={"text"} textClass={buttonClass} buttonFunction={() => navigate(`/blog/${postHead}`)} text={"read more"} /> : <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} buttonFunction={() => navigate(`/blog/${postHead}`)} text={"read more"} />}</>;
}
